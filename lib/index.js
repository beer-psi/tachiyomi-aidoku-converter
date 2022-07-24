import converters from './converters/index.js';
import Long from 'long';
import protobuf from 'protobufjs/light.js';
import { Backup } from './types/tachiyomi.js';
protobuf.util.Long = Long;
protobuf.configure();
const TACHIYOMI_TRACKERS = {
    1: 'myanimelist',
    2: 'anilist',
    // 3: "kitsu",
    // 4: "shikimori",
    // 5: "bangumi",
    // 6: "komga",
    // 7: "mangaupdates"
};
class LongSet extends Set {
    has(o) {
        for (const i of this) {
            if (o.eq(i)) {
                return true;
            }
        }
        return false;
    }
    add(o) {
        if (!this.has(o)) {
            Set.prototype.add.call(this, o);
        }
        return this;
    }
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
export function toAidoku(backup) {
    const dateString = new Date(Date.now()).toISOString().split('T')[0];
    const decoded = Backup.decode(backup);
    const categoriesMap = Object.fromEntries(decoded.backupCategories.map((c) => [c.order.toString(), c.name]));
    const aidokuBackup = {
        library: [],
        history: [],
        sources: [],
        manga: [],
        chapters: [],
        trackItems: [],
        categories: decoded.backupCategories.map((c) => c.name),
        date: new Date(),
        name: `Converted Tachiyomi Backup ${dateString}`,
        version: '0.0.1',
    };
    const convertersNotFound = new LongSet();
    const sources = new Set();
    decoded.backupManga.forEach((manga) => {
        const converter = converters.find((c) => c.tachiyomiSourceId.eq(manga.source));
        if (!converter) {
            // Filter out local manga and TachiyomiAZ/EH merged manga
            if (manga.source.ne(0) && manga.source.ne(6969)) {
                convertersNotFound.add(manga.source);
            }
            return;
        }
        sources.add(converter.aidokuSourceId);
        const aidokuManga = converter.toAidokuManga(manga);
        aidokuBackup.manga.push(aidokuManga);
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
            trackerId: TACHIYOMI_TRACKERS[t.syncId],
            mangaId: aidokuManga.id,
            sourceId: converter.aidokuSourceId,
            title: aidokuManga.title,
        })));
    });
    if (convertersNotFound.size > 0) {
        console.log(`Could not find converters for ${convertersNotFound.size} sources. Your library may not be complete.\n- ${[...convertersNotFound].join('\n- ')}`);
    }
    aidokuBackup.sources = [...sources];
    return {
        backup: aidokuBackup,
        dateString: dateString,
        missingSources: [...convertersNotFound].map((id) => id.toString()),
    };
}
