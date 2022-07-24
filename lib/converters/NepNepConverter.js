import Long from 'long';
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
    new NepNepConverter('https://mangasee123.com', new Long(9, 0, false)),
    new NepNepConverter('https://manga4life.com', new Long(1799950687, 1815651190, false)), // 7798162483793432927
];
