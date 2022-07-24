import Long from 'long';
import { Converter } from './AbstractConverter.js';
class KoushokuConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = new Long(-413969828, 905361794, false); // 3888499300158886492
        this.aidokuSourceId = 'en.koushoku';
        this.lang = 'en';
        this.baseUrl = 'https://koushoku.org';
    }
    parseMangaId(url) {
        // /archive/7628/this-year-during-summer-break
        return url.split('/')[2];
    }
    parseChapterId(url) {
        return url.split('/')[2];
    }
}
export default [new KoushokuConverter()];
