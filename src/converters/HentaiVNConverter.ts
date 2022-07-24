import Long from 'long';
import { Converter } from './AbstractConverter.js';

class HentaiVNConverter extends Converter {
	override tachiyomiSourceId: Long = new Long(-776666435, 1527547964, false); // 6560768551969686205

	override aidokuSourceId: string = 'vi.hentaivn';

	override baseUrl: string = 'https://hentaivn.moe';

	override lang: string = 'vi';

	override parseMangaId(url: string): string {
		return url.replace(/^\//, '');
	}

	override parseChapterId(url: string): string {
		return this.parseMangaUrl(url);
	}
}

export default [new HentaiVNConverter()];
