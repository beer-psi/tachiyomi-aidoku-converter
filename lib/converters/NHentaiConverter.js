import { Converter } from './AbstractConverter.js';
class NHentaiConverter extends Converter {
    constructor(lang, tachiyomiSourceId) {
        super();
        this.lang = lang;
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.aidokuSourceId = 'multi.nhentai';
        this.baseUrl = 'https://nhentai.net';
    }
    parseMangaId(url) {
        return url.replace('/g/', '').replace(/\/$/, '');
    }
    parseChapterId(url) {
        return this.parseMangaId(url);
    }
}
export default [
    new NHentaiConverter('en', '3122156392225024195'),
    new NHentaiConverter('ja', '4726175775739752699'),
    new NHentaiConverter('zh', '2203215402871965477'),
    new NHentaiConverter('', '7309872737163460316'), // all languages
];
