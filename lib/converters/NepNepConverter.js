import { Converter } from './AbstractConverter.js';
class NepNepConverter extends Converter {
    constructor(baseUrl, tachiyomiSourceId) {
        super();
        this.baseUrl = baseUrl;
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.aidokuSourceId = 'en.nepnep';
        this.lang = 'en';
    }
    parseMangaId(url) {
        return url.replace('/manga/', '');
    }
    parseChapterId(url) {
        return url.replace('/read-online/', '');
    }
    parseMangaUrl(url) {
        return `${this.baseUrl}${url}`;
    }
}
export default [
    new NepNepConverter('https://mangasee123.com', '9'),
    new NepNepConverter('https://manga4life.com', '7798162483793432927'),
];
