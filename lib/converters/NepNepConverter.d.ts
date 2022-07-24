import { Converter } from './AbstractConverter';
declare class NepNepConverter extends Converter {
    baseUrl: string;
    tachiyomiSourceId: string;
    constructor(baseUrl: string, tachiyomiSourceId: string);
    aidokuSourceId: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
    parseMangaUrl(url: string): string;
}
declare const _default: NepNepConverter[];
export default _default;
