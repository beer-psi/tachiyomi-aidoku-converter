import Long from 'long';
import { Manga } from '../types/aidoku';
import { BackupManga } from '../types/tachiyomi';
import { Converter } from './AbstractConverter.js';
declare class MangaDexConverter extends Converter {
    tachiyomiSourceId: Long;
    lang: string;
    aidokuSourceId: string;
    baseUrl: string;
    constructor(tachiyomiSourceId: Long, lang: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    toAidokuManga(manga: BackupManga): Manga;
}
declare const _default: MangaDexConverter[];
export default _default;
