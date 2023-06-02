import Long from 'long';
import { Chapter, Library, Manga, MangaStatus, MangaViewer, History } from './types/aidoku.js';
import { BackupChapter, BackupManga, BackupSource, BrokenBackupSource, BackupHistory } from './types/tachiyomi.js';
import { createId } from './utils.js';

export class Converter {
	/**
	 * The Tachiyomi source ID for this source.
	 */
	tachiyomiSource: BackupSource | BrokenBackupSource;

	/**
	 * The Aidoku source ID for this source.
	 */
	aidokuSourceId: string;

	constructor(source: BackupSource | BrokenBackupSource) {
		this.tachiyomiSource = source;
		this.aidokuSourceId = source.name.toLowerCase();
	}

	static async fromAidokuSource(source: string): Promise<Converter> {
		const [lang, name] = source.split(".");
		const tachiyomiSourceId = await createId(`${name}/${lang}/1`);

		const backupSource = BackupSource.fromObject({
			name: source,
			sourceId: tachiyomiSourceId,
		});

		return new Converter(backupSource);
	}

	private mangaViewer: { [key: number]: MangaViewer } = {
		1: MangaViewer.LTR,
		2: MangaViewer.RTL,
		3: MangaViewer.Vertical,
		4: MangaViewer.Scroll, // Webtoon viewer
		5: MangaViewer.Scroll, // Continuous vertical
	};

	private tachiyomiMangaViewer: { [key: number]: number } = {
		[MangaViewer.LTR]: 1,
		[MangaViewer.RTL]: 2,
		[MangaViewer.Vertical]: 3,
		[MangaViewer.Scroll]: 4,
	};

	private mangaStatus: { [key: number]: MangaStatus } = {
		0: MangaStatus.Unknown,
		1: MangaStatus.Ongoing,
		2: MangaStatus.Completed,
		3: MangaStatus.Unknown, // Licensed
		4: MangaStatus.Completed, // Publishing finished
		5: MangaStatus.Cancelled,
		6: MangaStatus.Hiatus,
	};

	private tachiyomiMangaStatus: { [key: number]: number } = {
		[MangaStatus.Unknown]: 0,
		[MangaStatus.Ongoing]: 1,
		[MangaStatus.Completed]: 2,
		[MangaStatus.Cancelled]: 5,
		[MangaStatus.Hiatus]: 6,
	};

	toAidokuManga(manga: BackupManga): Manga {
		return {
			id: manga.url,
			author: manga.author ?? '',
			url: manga.url,
			nsfw: 0, // Not available
			tags: manga.genre,
			title: manga.title,
			sourceId: this.aidokuSourceId,
			desc: manga.description ?? '',
			cover: manga.thumbnailUrl ?? '',
			viewer: this.mangaViewer[manga.viewer] ?? MangaViewer.Default,
			status: this.mangaStatus[manga.status] ?? MangaStatus.Unknown,
		};
	}

	async toTachiyomiManga(
		manga: Manga,
		options: {
			library?: Library,
			histories?: History[],
			chapters?: Chapter[],
			categories?: string[]
		} = {}
	): Promise<BackupManga> {
		if (!manga.url) {
			throw new Error("Manga must have a url");
		}
		const tachiyomiUrl = new URL(manga.url, "https://dummy").pathname;
		const { library, histories, chapters, categories } = options;

		return BackupManga.fromObject({
			source: this.tachiyomiSource.sourceId,
			url: tachiyomiUrl,
			title: manga.title ?? "",
			artist: manga.artist,
			author: manga.author,
			description: manga.desc,
			genre: manga.tags ?? [],
			status: this.tachiyomiMangaStatus[manga.status] ?? 0,
			thumbnailUrl: manga.cover,
			dateAdded: library ? Long.fromNumber(library.dateAdded.getTime()) : new Long(0),
			viewer: this.tachiyomiMangaViewer[manga.viewer] ?? 0,
			chapters: chapters?.map((c) => {
				const history = histories?.find((h) => h.mangaId === manga.id && h.chapterId === c.id);
				return this.toTachiyomiChapter(c, history);
			}) ?? [],
			categories: categories && library?.categories 
				? library.categories.map((c) => Long.fromNumber(categories.indexOf(c))) 
				: [],
			// tracking: not implemented because converting back to trackingUrl from id is a fruitless exercise.
			favorite: !!library,
			history: histories?.map((h) => BackupHistory.fromObject({
				url: h.chapterId,
				lastRead: Long.fromNumber(h.dateRead.getTime()),
			})) ?? [],
		})
	}

	toAidokuChapter(manga: BackupManga, chapter: BackupChapter): Chapter {
		return {
			sourceId: this.aidokuSourceId,
			mangaId: manga.url,
			id: chapter.url,
			title: chapter.name,
			scanlator: chapter.scanlator,
			lang: '',
			chapter: chapter.chapterNumber,
			dateUploaded: new Date(chapter.dateUpload.toNumber()),
			sourceOrder: chapter.sourceOrder,
		};
	}

	toTachiyomiChapter(chapter: Chapter, history?: History | null): BackupChapter {
		return BackupChapter.fromObject({
			url: chapter.id,
			name: chapter.title ?? "",
			scanlator: chapter.scanlator,
			read: history?.completed ?? false,
			bookmark: false,
			lastPageRead: history?.progress ?? 0,
			dateUpload: chapter?.dateUploaded ? Long.fromNumber(chapter.dateUploaded.getTime()) : new Long(0),
			chapterNumber: chapter.chapter ?? 0,
			sourceOrder: chapter.sourceOrder,
		})
	}
}
