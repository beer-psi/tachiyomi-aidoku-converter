import { MangaStatus, MangaViewer } from '../types/aidoku';
export class Converter {
    constructor() {
        this.mangaViewer = {
            1: MangaViewer.LTR,
            2: MangaViewer.RTL,
            3: MangaViewer.Vertical,
            4: MangaViewer.Scroll,
            5: MangaViewer.Scroll, // Continuous vertical
        };
        this.mangaStatus = {
            0: MangaStatus.Unknown,
            1: MangaStatus.Ongoing,
            2: MangaStatus.Completed,
            3: MangaStatus.Unknown,
            4: MangaStatus.Completed,
            5: MangaStatus.Cancelled,
            6: MangaStatus.Hiatus,
        };
    }
    parseMangaUrl(url) {
        return `${this.baseUrl}${url}`;
    }
    toAidokuManga(manga) {
        var _a, _b, _c, _d, _e;
        return {
            id: this.parseMangaId(manga.url),
            author: (_a = manga.author) !== null && _a !== void 0 ? _a : '',
            url: this.parseMangaUrl(manga.url),
            nsfw: 0,
            tags: manga.genre,
            title: manga.title,
            sourceId: this.aidokuSourceId,
            desc: (_b = manga.description) !== null && _b !== void 0 ? _b : '',
            cover: (_c = manga.thumbnailUrl) !== null && _c !== void 0 ? _c : '',
            viewer: (_d = this.mangaViewer[manga.viewer]) !== null && _d !== void 0 ? _d : MangaViewer.Default,
            status: (_e = this.mangaStatus[manga.status]) !== null && _e !== void 0 ? _e : MangaStatus.Unknown,
        };
    }
    toAidokuChapter(manga, chapter) {
        var _a;
        return {
            sourceId: this.aidokuSourceId,
            mangaId: this.parseMangaId(manga.url),
            lang: this.lang,
            id: this.parseChapterId(chapter.url),
            scanlator: (_a = chapter.scanlator) !== null && _a !== void 0 ? _a : '',
            dateUploaded: new Date(chapter.dateUpload.toNumber()),
            chapter: chapter.chapterNumber,
            sourceOrder: chapter.sourceOrder,
        };
    }
}
