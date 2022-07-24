import { Converter } from './AbstractConverter';

class NHentaiConverter extends Converter {
	override aidokuSourceId: string = 'multi.nhentai';

	override baseUrl: string = 'https://nhentai.net';

	constructor(public lang: string, public tachiyomiSourceId: string) {
		super();
	}

	override parseMangaId(url: string): string {
		return url.replace('/g/', '').replace(/\/$/, '');
	}

	override parseChapterId(url: string): string {
		return this.parseMangaId(url);
	}
}

export default [
	new NHentaiConverter('en', '3122156392225024195'),
	new NHentaiConverter('ja', '4726175775739752699'),
	new NHentaiConverter('zh', '2203215402871965477'),
	new NHentaiConverter('', '7309872737163460316'), // all languages
];
