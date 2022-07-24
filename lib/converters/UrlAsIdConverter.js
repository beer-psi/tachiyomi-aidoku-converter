import { Converter } from './AbstractConverter.js';
/**
 * Generic converter class for sources that use the full URL as the manga/chapter ID.
 */
class UrlAsIdConverter extends Converter {
    constructor(baseUrl, lang, tachiyomiSourceId, aidokuSourceId) {
        super();
        this.baseUrl = baseUrl;
        this.lang = lang;
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.aidokuSourceId = aidokuSourceId;
    }
    parseMangaId(url) {
        return this.parseMangaUrl(url);
    }
    parseChapterId(url) {
        return this.parseMangaUrl(url);
    }
    parseMangaUrl(url) {
        return `${this.baseUrl}${url}`;
    }
}
/**
 * Generic converter class for sources that use the URL without domain
 * as the manga/chapter ID (matching Tachiyomi's URL convention).
 */
class TachiUrlAsIdConverter extends Converter {
    constructor(baseUrl, lang, tachiyomiSourceId, aidokuSourceId) {
        super();
        this.baseUrl = baseUrl;
        this.lang = lang;
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.aidokuSourceId = aidokuSourceId;
    }
    parseMangaId(url) {
        return url;
    }
    parseChapterId(url) {
        return url;
    }
}
export default [
    new UrlAsIdConverter('https://readkomik.com', 'en', '4894958130777364576', 'en.readkomik'),
    new UrlAsIdConverter('https://alpha-scans.org', 'en', '4142958065526725213', 'en.alphascans'),
    new UrlAsIdConverter('https://kumascans.com', 'en', '4949888651444819799', 'en.kumascans'),
    new UrlAsIdConverter('https://www.asurascans.com', 'en', '6247824327199706550', 'multi.asurascans'),
    new UrlAsIdConverter('https://www.asurascans.com', 'tr', '7963074674054946733', 'multi.asurascans'),
    new UrlAsIdConverter('https://xoxocomics.com', 'en', '2385956107618754468', 'en.xoxocomics'),
    new UrlAsIdConverter('https://www.nettruyenco.com', 'vi', '5198966899163361086', 'vi.nettruyen'),
    new UrlAsIdConverter('http://truyenqqpro.com', 'vi', '2553532324170433933', 'vi.truyenqq'),
    new TachiUrlAsIdConverter('https://www.mangapill.com', 'en', '8448310129093543312', 'en.mangapill'),
    new TachiUrlAsIdConverter('https://readm.org', 'en', '1622954192645289673', 'en.readm'),
    new TachiUrlAsIdConverter('https://onepiecechapters.com', 'en', '1435116756378369709', 'en.tcbscans'),
    new TachiUrlAsIdConverter('https://truyentranhlh.net', 'vi', '7969606392351831672', 'vi.truyentranhlh'),
    new TachiUrlAsIdConverter('https://blogtruyen.vn', 'vi', '7328966691702591431', 'vi.blogtruyen'),
];
