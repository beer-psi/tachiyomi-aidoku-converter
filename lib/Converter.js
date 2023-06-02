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
import { BackupChapter, BackupManga, BackupSource, BackupHistory } from './types/tachiyomi.js';
import { createId } from './utils.js';
export class Converter {
    constructor(source) {
        this.mangaViewer = {
            1: 2 /* LTR */,
            2: 1 /* RTL */,
            3: 3 /* Vertical */,
            4: 4 /* Scroll */,
            5: 4 /* Scroll */, // Continuous vertical
        };
        this.tachiyomiMangaViewer = {
            [2 /* LTR */]: 1,
            [1 /* RTL */]: 2,
            [3 /* Vertical */]: 3,
            [4 /* Scroll */]: 4,
        };
        this.mangaStatus = {
            0: 0 /* Unknown */,
            1: 1 /* Ongoing */,
            2: 2 /* Completed */,
            3: 0 /* Unknown */,
            4: 2 /* Completed */,
            5: 3 /* Cancelled */,
            6: 4 /* Hiatus */,
        };
        this.tachiyomiMangaStatus = {
            [0 /* Unknown */]: 0,
            [1 /* Ongoing */]: 1,
            [2 /* Completed */]: 2,
            [3 /* Cancelled */]: 5,
            [4 /* Hiatus */]: 6,
        };
        this.tachiyomiSource = source;
        this.aidokuSourceId = source.name.toLowerCase();
    }
    static fromAidokuSource(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const [lang, name] = source.split(".");
            const tachiyomiSourceId = yield createId(`${name}/${lang}/1`);
            const backupSource = BackupSource.fromObject({
                name: source,
                sourceId: tachiyomiSourceId,
            });
            return new Converter(backupSource);
        });
    }
    toAidokuManga(manga) {
        var _a, _b, _c, _d, _e;
        return {
            id: manga.url,
            author: (_a = manga.author) !== null && _a !== void 0 ? _a : '',
            url: manga.url,
            nsfw: 0,
            tags: manga.genre,
            title: manga.title,
            sourceId: this.aidokuSourceId,
            desc: (_b = manga.description) !== null && _b !== void 0 ? _b : '',
            cover: (_c = manga.thumbnailUrl) !== null && _c !== void 0 ? _c : '',
            viewer: (_d = this.mangaViewer[manga.viewer]) !== null && _d !== void 0 ? _d : 0 /* Default */,
            status: (_e = this.mangaStatus[manga.status]) !== null && _e !== void 0 ? _e : 0 /* Unknown */,
        };
    }
    toTachiyomiManga(manga, options = {}) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            if (!manga.url) {
                throw new Error("Manga must have a url");
            }
            const tachiyomiUrl = new URL(manga.url, "https://dummy").pathname;
            const { library, histories, chapters, categories } = options;
            return BackupManga.fromObject({
                source: this.tachiyomiSource.sourceId,
                url: tachiyomiUrl,
                title: (_a = manga.title) !== null && _a !== void 0 ? _a : "",
                artist: manga.artist,
                author: manga.author,
                description: manga.desc,
                genre: (_b = manga.tags) !== null && _b !== void 0 ? _b : [],
                status: (_c = this.tachiyomiMangaStatus[manga.status]) !== null && _c !== void 0 ? _c : 0,
                thumbnailUrl: manga.cover,
                dateAdded: library ? Long.fromNumber(library.dateAdded.getTime()) : new Long(0),
                viewer: (_d = this.tachiyomiMangaViewer[manga.viewer]) !== null && _d !== void 0 ? _d : 0,
                chapters: (_e = chapters === null || chapters === void 0 ? void 0 : chapters.map((c) => {
                    const history = histories === null || histories === void 0 ? void 0 : histories.find((h) => h.mangaId === manga.id && h.chapterId === c.id);
                    return this.toTachiyomiChapter(c, history);
                })) !== null && _e !== void 0 ? _e : [],
                categories: categories && (library === null || library === void 0 ? void 0 : library.categories)
                    ? library.categories.map((c) => Long.fromNumber(categories.indexOf(c)))
                    : [],
                // tracking: not implemented because converting back to trackingUrl from id is a fruitless exercise.
                favorite: !!library,
                history: (_f = histories === null || histories === void 0 ? void 0 : histories.map((h) => BackupHistory.fromObject({
                    url: h.chapterId,
                    lastRead: Long.fromNumber(h.dateRead.getTime()),
                }))) !== null && _f !== void 0 ? _f : [],
            });
        });
    }
    toAidokuChapter(manga, chapter) {
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
    toTachiyomiChapter(chapter, history) {
        var _a, _b, _c, _d;
        return BackupChapter.fromObject({
            url: chapter.id,
            name: (_a = chapter.title) !== null && _a !== void 0 ? _a : "",
            scanlator: chapter.scanlator,
            read: (_b = history === null || history === void 0 ? void 0 : history.completed) !== null && _b !== void 0 ? _b : false,
            bookmark: false,
            lastPageRead: (_c = history === null || history === void 0 ? void 0 : history.progress) !== null && _c !== void 0 ? _c : 0,
            dateUpload: (chapter === null || chapter === void 0 ? void 0 : chapter.dateUploaded) ? Long.fromNumber(chapter.dateUploaded.getTime()) : new Long(0),
            chapterNumber: (_d = chapter.chapter) !== null && _d !== void 0 ? _d : 0,
            sourceOrder: chapter.sourceOrder,
        });
    }
}
