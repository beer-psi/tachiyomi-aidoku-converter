import Long from 'long';
import { Converter } from './AbstractConverter.js';
declare class HentaiFoxConverter extends Converter {
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: HentaiFoxConverter[];
export default _default;
