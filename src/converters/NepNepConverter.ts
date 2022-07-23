import { Converter } from './AbstractConverter.js';

abstract class NepNepConverter extends Converter {
	override aidokuSourceId: string = 'en.nepnep';

	override aidokuSourceName: string = 'NepNep';

	override lang = 'en';

	override parseMangaId(url: string): string {
		return url.replace('/manga/', '');
	}

	override parseChapterId(url: string): string {
		return url.replace('/read-online/', '');
	}
}

class MangaSeeConverter extends NepNepConverter {
	override tachiyomiSourceName: string = 'MangaSee';

	override tachiyomiSourceId: string = '9';

	override parseMangaUrl(url: string): string {
		return `https://mangasee123.com${url}`;
	}
}

class MangaLifeConverter extends NepNepConverter {
	override tachiyomiSourceName: string = 'MangaLife';

	override tachiyomiSourceId: string = '7798162483793432927';

	override parseMangaUrl(url: string): string {
		return `https://manga4life.com${url}`;
	}
}

export default [new MangaLifeConverter(), new MangaSeeConverter()];
