import Long from 'long';
import { Converter } from './AbstractConverter.js';

class NepNepConverter extends Converter {
	constructor(public baseUrl: string, public tachiyomiSourceId: Long) {
		super();
	}

	override aidokuSourceId: string = 'en.nepnep';

	override lang = 'en';

	override parseMangaId(url: string): string {
		return url.replace('/manga/', '');
	}

	override parseChapterId(url: string): string {
		return url.replace('/read-online/', '');
	}

	override parseMangaUrl(url: string): string {
		return `${this.baseUrl}${url}`;
	}
}

export default [
	new NepNepConverter('https://mangasee123.com', new Long(9, 0, false)), // 9
	new NepNepConverter('https://manga4life.com', new Long(1799950687, 1815651190, false)), // 7798162483793432927
];
