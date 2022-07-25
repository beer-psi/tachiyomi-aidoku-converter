import Long from 'long';
import { Converter } from './AbstractConverter.js';

class DmzjConverter extends Converter {
	override tachiyomiSourceId: Long = new Long(-579982820, 671527822, false); // 2884190037559093788

	override aidokuSourceId: string = 'zh.dmzj';

	override baseUrl: string = 'https://m.dmzj.com';

	override lang: string = 'zh';

	override parseMangaId(url: string): string {
		const numericIdMatch = url.split('/')[2].match(/\d+/);
		if (!numericIdMatch) {
			throw `Couldn't parse out numeric ID from ${url}`;
		}
		return numericIdMatch[0];
	}

	override parseChapterId(url: string): string {
		// https://github.com/tachiyomiorg/tachiyomi-extensions/blob/master/src/zh/dmzj/src/eu/kanade/tachiyomi/extension/zh/dmzj/Dmzj.kt#L355
		// {comic_id}/{id}
		return url;
	}

	override parseMangaUrl(url: string): string {
		const numericIdMatch = url.match(/(\d+)\.(json|html)/);
		if (!numericIdMatch) {
			throw `Couldn't parse out numeric ID from ${url}`;
		}
		return `${this.baseUrl}/info/${numericIdMatch[1]}.html`;
	}
}

export default [new DmzjConverter()];
