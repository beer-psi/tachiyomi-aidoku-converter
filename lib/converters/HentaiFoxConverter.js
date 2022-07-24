import Long from 'long';
import { Converter } from './AbstractConverter.js';
class HentaiFoxConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = new Long(-132005404, 1849847375, false); // 7945033982379409892
        this.aidokuSourceId = 'en.hentaifox';
        this.baseUrl = 'https://hentaifox.com';
        this.lang = 'en';
    }
    parseMangaId(url) {
        // /gallery/123456/
        return url.replace(/\/g(?:allery)?\//, '').replace(/\/$/, '');
    }
    parseChapterId(url) {
        // /gallery/123456/#12
        // https://github.com/tachiyomiorg/tachiyomi-extensions/blob/master/src/en/hentaifox/src/eu/kanade/tachiyomi/extension/en/hentaifox/HentaiFox.kt#L118
        return url.replace(/\/g(?:allery)?\//, '').replace(/\/?#\d+$/, '');
    }
}
export default [new HentaiFoxConverter()];
