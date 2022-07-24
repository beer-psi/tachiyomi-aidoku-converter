import Long from 'long';
import { Converter } from './AbstractConverter.js';

class YuriNekoConverter extends Converter {
	override tachiyomiSourceId: Long = new Long(-1621112494, 1027640203, false); // 4413681066613655890

	override aidokuSourceId: string = 'vi.yurianeko';

	override lang: string = 'vi';

	override baseUrl: string = 'https://yurineko.net';

	override parseMangaId(url: string): string {
		return url.replace('/manga/', '');
	}

	override parseChapterId(url: string): string {
		return url.replace('/read/', '');
	}
}

export default [new YuriNekoConverter()];
