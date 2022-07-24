import Long from 'long';
import { Converter } from './AbstractConverter';
declare class DmzjConverter extends Converter {
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    parseMangaUrl(url: string): string;
}
declare const _default: DmzjConverter[];
export default _default;
