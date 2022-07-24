import Long from 'long';
import { Converter } from './AbstractConverter.js';

class MadaraConverter extends Converter {
	constructor(
		public baseUrl: string,
		public lang: string,
		public tachiyomiSourceId: Long,
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
	new MadaraConverter(
		'https://coloredmanga.com',
		'en',
		new Long(-1175571555, 2050931948, false), // 8808685646100968349
		'en.coloredmanga'
	),
	new MadaraConverter(
		'https://hentaicb.top',
		'vi',
		new Long(-2087855290, 191768210, false), // 823638192569572166
		'vi.hentaicube'
	),
	new MadaraConverter(
		'https://lilymanga.com',
		'en',
		new Long(-533071805, 1043313331, false), // 4480996639887718467
		'en.lilymanga',
		'ys'
	),
	new MadaraConverter(
		'https://mangatx.com',
		'en',
		new Long(2407141, 762446728, false), // 3274683761704614629
		'en.mangatx'
	),
	new MadaraConverter(
		'https://manhuaplus.com',
		'en',
		new Long(1143180969, 2102502331, false), // 9030178752551947945
		'en.manhuaplus'
	),
	new MadaraConverter(
		'https://reaperscans.com',
		'en',
		new Long(1375231039, 1205415465, false), // 5177220001642863679
		'en.reaperscans',
		'series'
	),
	new MadaraConverter(
		'https://reset-scans.com',
		'en',
		new Long(1327330464, 2070860820, false), // 8894279497795073184
		'en.resetscans'
	),
	new MadaraConverter(
		'https://toonily.com',
		'en',
		new Long(2010312319, 1208523678, false), // 5190569675461947007
		'en.toonily',
		'webtoon'
	),
];
