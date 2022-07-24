import Long from 'long';
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
    new NHentaiConverter('en', new Long(1674160323, 726933682, false)),
    new NHentaiConverter('ja', new Long(-486133509, 1100398547, false)),
    new NHentaiConverter('zh', new Long(1541031717, 512976060, false)),
    new NHentaiConverter('', new Long(1810939612, 1701962374, false)), // all languages, 7309872737163460316
];
