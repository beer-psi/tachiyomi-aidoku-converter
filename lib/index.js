var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Long from 'long';
import protobuf from 'protobufjs/light.js';
import { Backup, BackupCategory } from './types/tachiyomi.js';
import { Converter } from './Converter.js';
import { TACHIYOMI_TO_AIDOKU_TRACKERS } from './utils.js';
protobuf.util.Long = Long;
protobuf.configure();
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
export function toAidoku(backup) {
    const dateString = new Date().toISOString().split('T')[0];
    const decodedBackup = Backup.decode(backup);
    const categoriesMap = Object.fromEntries(decodedBackup.backupCategories.map((c) => [c.order.toString(), c.name]));
    const converters = decodedBackup.backupSources.map((c) => new Converter(c));
    const sources = new Set();
    const aidokuBackup = {
        library: [],
        history: [],
        sources: [],
        manga: [],
        chapters: [],
        trackItems: [],
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
            var _a, _b, _c;
            const aidokuChapter = converter.toAidokuChapter(manga, chapter);
            aidokuBackup.chapters.push(aidokuChapter);
            aidokuBackup.history.push({
                progress: chapter.lastPageRead,
                mangaId: aidokuManga.id,
                chapterId: aidokuChapter.id,
                completed: chapter.read,
                sourceId: converter.aidokuSourceId,
                dateRead: new Date((_c = (_b = (_a = [...manga.history, ...manga.brokenHistory]
                    .find((h) => h.url === chapter.url)) === null || _a === void 0 ? void 0 : _a.lastRead) === null || _b === void 0 ? void 0 : _b.toNumber()) !== null && _c !== void 0 ? _c : 0),
            });
        });
        aidokuBackup.trackItems.push(...manga.tracking
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
        })));
    });
    aidokuBackup.sources = [...sources];
    return {
        backup: aidokuBackup,
        dateString: dateString,
        missingSources: [],
    };
}
export function toTachiyomi(backup) {
    return __awaiter(this, void 0, void 0, function* () {
        const dateString = new Date().toISOString().split('T')[0];
        const tachiyomiBackup = {
            backupManga: [],
            backupCategories: [],
            backupSources: [],
        };
        const converters = yield Promise.all(backup.sources.map((s) => Converter.fromAidokuSource(s)));
        tachiyomiBackup.backupCategories = backup.categories.map((c, i) => BackupCategory.fromObject({
            name: c,
            order: Long.fromNumber(i),
        }));
        console.log(tachiyomiBackup.backupCategories);
        tachiyomiBackup.backupSources = converters.map((c) => c.tachiyomiSource);
        tachiyomiBackup.backupManga = yield Promise.all(backup.manga.map((manga) => __awaiter(this, void 0, void 0, function* () {
            const converter = converters.find((c) => c.aidokuSourceId === manga.sourceId);
            if (converter === null || converter === undefined) {
                throw new Error(`Could not find converter for source ${manga.sourceId}. Something went horribly wrong.`);
            }
            const tachiyomiManga = yield converter.toTachiyomiManga(manga, {
                library: backup.library.find((l) => l.mangaId === manga.id),
                histories: backup.history.filter((h) => h.mangaId === manga.id),
                chapters: backup.chapters.filter((c) => c.mangaId === manga.id),
                categories: backup.categories,
            });
            return tachiyomiManga;
        })));
        return {
            backup: Backup.encode(tachiyomiBackup).finish(),
            dateString,
            missingSources: [],
            ids: converters.reduce((acc, c) => {
                acc[c.tachiyomiSource.sourceId.toString()] = c.aidokuSourceId;
                return acc;
            }, {}),
        };
    });
}
