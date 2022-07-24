import { Manga } from '../types/aidoku';
import { BackupManga } from '../types/tachiyomi';
import { Converter } from './AbstractConverter';
declare class MangaDexConverter extends Converter {
    tachiyomiSourceId: string;
    lang: string;
    aidokuSourceId: string;
    baseUrl: string;
    constructor(tachiyomiSourceId: string, lang: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    toAidokuManga(manga: BackupManga): Manga;
}
declare const _default: MangaDexConverter[];
export default _default;
