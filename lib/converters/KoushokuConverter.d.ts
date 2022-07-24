import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class KoushokuConverter extends Converter {
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    lang: string;
    baseUrl: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: KoushokuConverter[];
export default _default;
