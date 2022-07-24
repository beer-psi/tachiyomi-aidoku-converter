import { Converter } from './AbstractConverter';
declare class YuriNekoConverter extends Converter {
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    lang: string;
    baseUrl: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: YuriNekoConverter[];
export default _default;
