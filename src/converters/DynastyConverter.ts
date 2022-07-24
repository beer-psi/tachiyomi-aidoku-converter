import Long from 'long';
import { Converter } from './AbstractConverter.js';

class DynastyConverter extends Converter {
	constructor(public tachiyomiSourceId: Long) {
		super();
	}

	override aidokuSourceId: string = 'en.dynastyscans';

	override baseUrl: string = 'https://dynasty-scans.com';

	override lang = 'en';

	override parseMangaId(url: string): string {
		return url.replace(/^\//, '');
	}

	override parseChapterId(url: string): string {
		return url.replace('/chapters/', '');
	}
}

// Anthologies, Doujins, Series
export default [
	new Long(-1700845042, 171993592, false), // 738706855355689486
	new Long(-702418402, 1453721207, false), // 6243685045159195166
	new Long(461221184, 155785930, false), // 669095474988166464
].map((id) => new DynastyConverter(id));
