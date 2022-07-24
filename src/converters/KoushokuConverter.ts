import Long from 'long';
import { Converter } from './AbstractConverter.js';

class KoushokuConverter extends Converter {
	override tachiyomiSourceId: Long = new Long(-413969828, 905361794, false); // 3888499300158886492

	override aidokuSourceId: string = 'en.koushoku';

	override lang: string = 'en';

	override baseUrl: string = 'https://koushoku.org';

	override parseMangaId(url: string): string {
		// /archive/7628/this-year-during-summer-break
		return url.split('/')[2];
	}

	override parseChapterId(url: string): string {
		return url.split('/')[2];
	}
}

export default [new KoushokuConverter()];
