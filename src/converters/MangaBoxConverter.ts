import { Converter } from './AbstractConverter.js';

abstract class MangaBoxConverter extends Converter {
	abstract baseUrl: string;

	override parseMangaId(url: string): string {
		return this.parseMangaUrl(url);
	}

	override parseChapterId(url: string): string {
		return this.parseMangaUrl(url);
	}
}

class MangaBatConverter extends MangaBoxConverter {
	override baseUrl: string = 'https://m.mangabat.com';

	override tachiyomiSourceId: string = '4215511432986138970';

	override aidokuSourceId: string = 'en.mangabat';

	override lang = 'en';

	override parseMangaUrl(url: string): string {
		return url.replace('https://readmangabat.com', 'https://m.mangabat.com');
	}
}

class MangaNatoConverter extends MangaBoxConverter {
	override baseUrl: string = 'https://manganato.com';

	override tachiyomiSourceId: string = '1024627298672457456';

	override aidokuSourceId: string = 'en.manganato';

	override lang = 'en';

	override parseMangaUrl(url: string): string {
		return url.replace('https://readmanganato.com', 'https://manganato.com');
	}
}

export default [new MangaNatoConverter(), new MangaBatConverter()];
