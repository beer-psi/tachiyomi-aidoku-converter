import Long from 'long';
import { Converter } from './AbstractConverter.js';
class DynastyConverter extends Converter {
    constructor(tachiyomiSourceId) {
        super();
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.aidokuSourceId = 'en.dynastyscans';
        this.baseUrl = 'https://dynasty-scans.com';
        this.lang = 'en';
    }
    parseMangaId(url) {
        return url.replace(/^\//, '');
    }
    parseChapterId(url) {
        return url.replace('/chapters/', '');
    }
}
// Anthologies, Doujins, Series
export default [
    new Long(-1700845042, 171993592, false),
    new Long(-702418402, 1453721207, false),
    new Long(461221184, 155785930, false), // 669095474988166464
].map((id) => new DynastyConverter(id));
