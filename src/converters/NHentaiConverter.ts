import Long from 'long';
import { Converter } from './AbstractConverter.js';

class NHentaiConverter extends Converter {
	override aidokuSourceId: string = 'multi.nhentai';

	override baseUrl: string = 'https://nhentai.net';

	constructor(public lang: string, public tachiyomiSourceId: Long) {
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
	new NHentaiConverter('en', new Long(1674160323, 726933682, false)), // 3122156392225024195
	new NHentaiConverter('ja', new Long(-486133509, 1100398547, false)), // 4726175775739752699
	new NHentaiConverter('zh', new Long(1541031717, 512976060, false)), // 2203215402871965477
	new NHentaiConverter('', new Long(1810939612, 1701962374, false)), // all languages, 7309872737163460316
];
