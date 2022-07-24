import { Converter } from './AbstractConverter';
class YuriNekoConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = '4413681066613655890';
        this.aidokuSourceId = 'vi.yurianeko';
        this.lang = 'vi';
        this.baseUrl = 'https://yurineko.net';
    }
    parseMangaId(url) {
        return url.replace('/manga/', '');
    }
    parseChapterId(url) {
        return url.replace('/read/', '');
    }
}
export default [new YuriNekoConverter()];
