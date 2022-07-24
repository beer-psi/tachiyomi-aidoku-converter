import Long from 'long';
import { Converter } from './AbstractConverter.js';

class HentaiFoxConverter extends Converter {
	override tachiyomiSourceId: Long = new Long(-132005404, 1849847375, false); // 7945033982379409892

	override aidokuSourceId: string = 'en.hentaifox';

	override baseUrl: string = 'https://hentaifox.com';

	override lang: string = 'en';

	override parseMangaId(url: string): string {
		// /gallery/123456/
		return url.replace(/\/g(?:allery)?\//, '').replace(/\/$/, '');
	}

	override parseChapterId(url: string): string {
		// /gallery/123456/#12
		// https://github.com/tachiyomiorg/tachiyomi-extensions/blob/master/src/en/hentaifox/src/eu/kanade/tachiyomi/extension/en/hentaifox/HentaiFox.kt#L118
		return url.replace(/\/g(?:allery)?\//, '').replace(/\/?#\d+$/, '');
	}
}

export default [new HentaiFoxConverter()];
