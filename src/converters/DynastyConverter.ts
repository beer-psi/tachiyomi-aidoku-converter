import { Converter } from './AbstractConverter.js';

class DynastyConverter extends Converter {
	constructor(public tachiyomiSourceId: string) {
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
export default ['738706855355689486', '6243685045159195166', '669095474988166464'].map(
	(id) => new DynastyConverter(id)
);
