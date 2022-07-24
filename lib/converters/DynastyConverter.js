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
export default ['738706855355689486', '6243685045159195166', '669095474988166464'].map((id) => new DynastyConverter(id));
