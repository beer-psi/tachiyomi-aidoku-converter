import { Converter } from './AbstractConverter.js';
declare abstract class MangaBoxConverter extends Converter {
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare class MangaBatConverter extends MangaBoxConverter {
    baseUrl: string;
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    lang: string;
    parseMangaUrl(url: string): string;
}
declare class MangaNatoConverter extends MangaBoxConverter {
    baseUrl: string;
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    lang: string;
    parseMangaUrl(url: string): string;
}
declare const _default: (MangaBatConverter | MangaNatoConverter)[];
export default _default;
