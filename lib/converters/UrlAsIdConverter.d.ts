import { Converter } from './AbstractConverter';
/**
 * Generic converter class for sources that use the full URL as the manga/chapter ID.
 */
declare class UrlAsIdConverter extends Converter {
    baseUrl: string;
    lang: string;
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: string, aidokuSourceId: string);
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
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: string, aidokuSourceId: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: (UrlAsIdConverter | TachiUrlAsIdConverter)[];
export default _default;
