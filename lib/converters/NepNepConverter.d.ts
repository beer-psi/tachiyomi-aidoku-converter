import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class NepNepConverter extends Converter {
    baseUrl: string;
    tachiyomiSourceId: Long;
    constructor(baseUrl: string, tachiyomiSourceId: Long);
    aidokuSourceId: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    parseMangaUrl(url: string): string;
}
declare const _default: NepNepConverter[];
export default _default;
