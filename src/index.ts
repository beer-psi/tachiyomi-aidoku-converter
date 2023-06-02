import Long from 'long';
import protobuf, { Properties } from 'protobufjs/light.js';
import { Backup, BackupCategory } from './types/tachiyomi.js';
import { AidokuBackup } from './types/aidoku.js';
import { Converter } from './Converter.js';
import { TACHIYOMI_TO_AIDOKU_TRACKERS } from './utils.js';

protobuf.util.Long = Long;
protobuf.configure();

interface AidokuResult {
	backup: AidokuBackup | Uint8Array;
	dateString: string;
	missingSources: string[];
	ids?: Record<string, string>;
}

/**
 * Converts a Tachiyomi backup to an Aidoku backup.
 *
 * ### Notes
 * The returned backup uses `Date` for storing dates, but Aidoku expects
 * that JSON backups store the number of seconds since Unix epoch. Thus,
 * when serializing the backup to JSON, you need to use a custom replacer:
 *
 *     JSON.stringify(backup, (_, v) => {
 *         const date = Date.parse(v);
 *         return isNaN(date) ? v : Math.floor(date / 1000);
 *     });
 *
 * @param backup Decompressed Tachiyomi backup.
 * @returns an Aidoku backup.
 */
export function toAidoku(backup: Uint8Array): AidokuResult {
	const dateString = new Date().toISOString().split('T')[0];

	const decodedBackup: Backup = Backup.decode(backup);
	const categoriesMap = Object.fromEntries(
		decodedBackup.backupCategories.map((c) => [c.order.toString(), c.name])
	);
	const converters = decodedBackup.backupSources.map((c) => new Converter(c));
	const sources = new Set<string>();

	const aidokuBackup: AidokuBackup = {
		library: [],
		history: [],
		sources: [],
		manga: [],
		chapters: [],
		trackItems: [], // TODO
		categories: decodedBackup.backupCategories.map((c) => c.name),
		date: new Date(),
		name: `Converted Tachiyomi Backup ${dateString}`,
		version: '0.0.1',
	};

	decodedBackup.backupManga.forEach((manga) => {
		const converter = converters.find((c) => c.tachiyomiSource.sourceId.eq(manga.source));
		if (converter === null || converter === undefined) {
			return;
		}
		sources.add(converter.aidokuSourceId);

		const aidokuManga = converter.toAidokuManga(manga);

		aidokuBackup.manga.push(aidokuManga);

		if (manga.dateAdded.ne(0)) {
			aidokuBackup.library.push({
				mangaId: aidokuManga.id,
				lastUpdated: new Date(0),
				categories: manga.categories
					.map((c) => categoriesMap[c.toString()])
					.filter((c) => c !== undefined),
				dateAdded: new Date(manga.dateAdded.toNumber()),
				sourceId: converter.aidokuSourceId,
				lastOpened: new Date(0),
			});
		}

		manga.chapters.forEach((chapter) => {
			const aidokuChapter = converter.toAidokuChapter(manga, chapter);

			aidokuBackup.chapters.push(aidokuChapter);

			aidokuBackup.history.push({
				progress: chapter.lastPageRead,
				mangaId: aidokuManga.id,
				chapterId: aidokuChapter.id,
				completed: chapter.read,
				sourceId: converter.aidokuSourceId,
				dateRead: new Date(
					[...manga.history, ...manga.brokenHistory]
						.find((h) => h.url === chapter.url)
						?.lastRead?.toNumber() ?? 0
				),
			});
		});

		aidokuBackup.trackItems.push(
			...manga.tracking
				.filter((t) => t.syncId <= 2) // Only support MAL and AniList tracking
				.map((t) => ({
					// https://anilist.co/manga/31706/JoJo-no-Kimyou-na-Bouken-Steel-Ball-Run/
					// https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run
					//
					// HACK: For now, there's only tracking support for MAL and AniList, which has similar
					// URL structures. I'm not going to bother writing another converter class.
					id: t.trackingUrl.split('/')[4],
					trackerId: TACHIYOMI_TO_AIDOKU_TRACKERS[t.syncId],
					mangaId: aidokuManga.id,
					sourceId: converter.aidokuSourceId,
					title: aidokuManga.title,
				}))
		);
	});

	aidokuBackup.sources = [...sources];
	return {
		backup: aidokuBackup,
		dateString: dateString,
		missingSources: [],
	};
}

export async function toTachiyomi(backup: AidokuBackup): Promise<AidokuResult> {
	const dateString = new Date().toISOString().split('T')[0];

	const tachiyomiBackup: Properties<Backup> = {
		backupManga: [],
		backupCategories: [],
		backupSources: [],
	};

	const converters = await Promise.all(backup.sources.map((s) => Converter.fromAidokuSource(s)));
	
	tachiyomiBackup.backupCategories = backup.categories.map((c, i) => BackupCategory.fromObject({
		name: c,
		order: Long.fromNumber(i),
	}));
	console.log(tachiyomiBackup.backupCategories);
	tachiyomiBackup.backupSources = converters.map((c) => c.tachiyomiSource);
	tachiyomiBackup.backupManga = await Promise.all(backup.manga.map(async (manga) => {
		const converter = converters.find((c) => c.aidokuSourceId === manga.sourceId);
		if (converter === null || converter === undefined) {
			throw new Error(`Could not find converter for source ${manga.sourceId}. Something went horribly wrong.`);
		}

		const tachiyomiManga = await converter.toTachiyomiManga(manga, {
			library: backup.library.find((l) => l.mangaId === manga.id),
			histories: backup.history.filter((h) => h.mangaId === manga.id),
			chapters: backup.chapters.filter((c) => c.mangaId === manga.id),
			categories: backup.categories,
		});

		return tachiyomiManga;
	}));

	return {
		backup: Backup.encode(tachiyomiBackup).finish(),
		dateString,
		missingSources: [],
		ids: converters.reduce<Record<string, string>>((acc, c) => {
			acc[c.tachiyomiSource.sourceId.toString()] = c.aidokuSourceId;
			return acc;
		}, {}),
	}
}
