import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class NHentaiConverter extends Converter {
    lang: string;
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    baseUrl: string;
    constructor(lang: string, tachiyomiSourceId: Long);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: NHentaiConverter[];
export default _default;
