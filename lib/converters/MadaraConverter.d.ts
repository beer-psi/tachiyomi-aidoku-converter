import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class MadaraConverter extends Converter {
    baseUrl: string;
    lang: string;
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    sourcePath: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: Long, aidokuSourceId: string, sourcePath?: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: MadaraConverter[];
export default _default;
