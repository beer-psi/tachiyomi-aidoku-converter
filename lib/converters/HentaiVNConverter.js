import Long from 'long';
import { Converter } from './AbstractConverter.js';
class HentaiVNConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = new Long(-776666435, 1527547964, false); // 6560768551969686205
        this.aidokuSourceId = 'vi.hentaivn';
        this.baseUrl = 'https://hentaivn.moe';
        this.lang = 'vi';
    }
    parseMangaId(url) {
        return url.replace(/^\//, '');
    }
    parseChapterId(url) {
        return this.parseMangaUrl(url);
    }
}
export default [new HentaiVNConverter()];
