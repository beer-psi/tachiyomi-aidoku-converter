import { Converter } from './AbstractConverter.js';

class MadaraConverter extends Converter {
	constructor(
		public baseUrl: string,
		public lang: string,
		public tachiyomiSourceId: string,
		public aidokuSourceId: string,
		public sourcePath: string = 'manga'
	) {
		super();
	}

	override parseMangaId(url: string): string {
		return url.replace(`/${this.sourcePath}/`, '').replace(/\/$/, '');
	}

	override parseChapterId(url: string): string {
		const paths = url.replace(`/${this.sourcePath}/`, '').split('/');
		return `${paths[0]}/${paths[1]}/`;
	}
}

export default [
	new MadaraConverter('https://coloredmanga.com', 'en', '8808685646100968349', 'en.coloredmanga'),
	new MadaraConverter('https://hentaicb.top', 'vi', '823638192569572166', 'vi.hentaicube'),
	new MadaraConverter('https://lilymanga.com', 'en', '4480996639887718467', 'en.lilymanga', 'ys'),
	new MadaraConverter('https://mangatx.com', 'en', '3274683761704614629', 'en.mangatx'),
	new MadaraConverter('https://manhuaplus.com', 'en', '9030178752551947945', 'en.manhuaplus'),
	new MadaraConverter(
		'https://reaperscans.com',
		'en',
		'5177220001642863679',
		'en.reaperscans',
		'series'
	),
	new MadaraConverter('https://reset-scans.com', 'en', '8894279497795073184', 'en.resetscans'),
	new MadaraConverter('https://toonily.com', 'en', '5190569675461947007', 'en.toonily', 'webtoon'),
];
