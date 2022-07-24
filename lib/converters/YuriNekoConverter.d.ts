import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class YuriNekoConverter extends Converter {
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    lang: string;
    baseUrl: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: YuriNekoConverter[];
export default _default;
