import Long from 'long';
import { Converter } from './AbstractConverter.js';
/**
 * Generic converter class for sources that use the full URL as the manga/chapter ID.
 */
declare class UrlAsIdConverter extends Converter {
    baseUrl: string;
    lang: string;
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: Long, aidokuSourceId: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    parseMangaUrl(url: string): string;
}
/**
 * Generic converter class for sources that use the URL without domain
 * as the manga/chapter ID (matching Tachiyomi's URL convention).
 */
declare class TachiUrlAsIdConverter extends Converter {
    baseUrl: string;
    lang: string;
    tachiyomiSourceId: Long;
    aidokuSourceId: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: Long, aidokuSourceId: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: (UrlAsIdConverter | TachiUrlAsIdConverter)[];
export default _default;
