import { Converter } from './AbstractConverter';
class HentaiVNConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = '6560768551969686205';
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
