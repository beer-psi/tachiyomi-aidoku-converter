import { Converter } from './AbstractConverter.js';

/**
 * Generic converter class for sources that use the URL as the manga/chapter ID.
 */
class UrlAsIdConverter extends Converter {
	constructor(
		public baseUrl: string,
		public lang: string,
		public tachiyomiSourceId: string,
		public aidokuSourceId: string
	) {
		super();
	}

	override parseMangaId(url: string): string {
		return this.parseMangaUrl(url);
	}

	override parseChapterId(url: string): string {
		return this.parseMangaUrl(url);
	}

	override parseMangaUrl(url: string): string {
		return `${this.baseUrl}${url}`;
	}
}

export default [
	new UrlAsIdConverter('https://readkomik.com', 'en', '4894958130777364576', 'en.readkomik'),
	new UrlAsIdConverter('https://alpha-scans.org', 'en', '4142958065526725213', 'en.alphascans'),
	new UrlAsIdConverter('https://kumascans.com', 'en', '4949888651444819799', 'en.kumascans'),
	new UrlAsIdConverter(
		'https://www.asurascans.com',
		'en',
		'6247824327199706550',
		'multi.asurascans'
	),
	new UrlAsIdConverter(
		'https://www.asurascans.com',
		'tr',
		'7963074674054946733',
		'multi.asurascans'
	),
];
