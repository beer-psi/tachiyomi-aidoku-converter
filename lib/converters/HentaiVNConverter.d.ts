import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class HentaiVNConverter extends Converter {
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: HentaiVNConverter[];
export default _default;
