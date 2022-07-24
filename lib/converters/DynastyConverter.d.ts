import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class DynastyConverter extends Converter {
    tachiyomiSourceId: Long;
    constructor(tachiyomiSourceId: Long);
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: DynastyConverter[];
export default _default;
