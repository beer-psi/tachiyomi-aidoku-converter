import { Converter } from './AbstractConverter.js';
declare class NHentaiConverter extends Converter {
    lang: string;
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    baseUrl: string;
    constructor(lang: string, tachiyomiSourceId: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: NHentaiConverter[];
export default _default;
