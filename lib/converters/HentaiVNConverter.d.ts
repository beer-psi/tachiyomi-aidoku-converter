import { Converter } from './AbstractConverter';
declare class HentaiVNConverter extends Converter {
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    baseUrl: string;
    lang: string;
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: HentaiVNConverter[];
export default _default;
