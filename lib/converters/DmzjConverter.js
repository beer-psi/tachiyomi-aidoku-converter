import Long from 'long';
import { Converter } from './AbstractConverter';
class DmzjConverter extends Converter {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = new Long(-579982820, 671527822, false); // 2884190037559093788
        this.aidokuSourceId = 'zh.dmzj';
        this.baseUrl = 'https://m.dmzj.com';
        this.lang = 'zh';
    }
    parseMangaId(url) {
        const numericIdMatch = url.split('/')[2].match(/\d+/);
        if (!numericIdMatch) {
            throw `Couldn't parse out numeric ID from ${url}`;
        }
        return numericIdMatch[0];
    }
    parseChapterId(url) {
        // https://github.com/tachiyomiorg/tachiyomi-extensions/blob/master/src/zh/dmzj/src/eu/kanade/tachiyomi/extension/zh/dmzj/Dmzj.kt#L355
        // {comic_id}/{id}
        return url;
    }
    parseMangaUrl(url) {
        const numericIdMatch = url.match(/(\d+)\.(json|html)/);
        if (!numericIdMatch) {
            throw `Couldn't parse out numeric ID from ${url}`;
        }
        return `${this.baseUrl}/info/${numericIdMatch[1]}.html`;
    }
}
export default [new DmzjConverter()];
