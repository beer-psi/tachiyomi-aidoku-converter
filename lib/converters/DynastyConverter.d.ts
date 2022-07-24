import { Converter } from './AbstractConverter.js';
declare class DynastyConverter extends Converter {
    tachiyomiSourceId: string;
    constructor(tachiyomiSourceId: string);
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: DynastyConverter[];
export default _default;
