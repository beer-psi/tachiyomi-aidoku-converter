import { Converter } from './AbstractConverter';
declare class MadaraConverter extends Converter {
    baseUrl: string;
    lang: string;
    tachiyomiSourceId: string;
    aidokuSourceId: string;
    sourcePath: string;
    constructor(baseUrl: string, lang: string, tachiyomiSourceId: string, aidokuSourceId: string, sourcePath?: string);
    parseMangaId(url: string): string;
    parseChapterId(url: string): string;
}
declare const _default: MadaraConverter[];
export default _default;
