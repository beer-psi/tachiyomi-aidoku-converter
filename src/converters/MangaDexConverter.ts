import { Manga } from '../types/aidoku.js';
import { BackupManga } from '../types/tachiyomi.js';
import { Converter } from './AbstractConverter.js';

class MangaDexConverter extends Converter {
	override aidokuSourceId: string = 'multi.mangadex';

	constructor(public tachiyomiSourceId: string, public lang: string) {
		super();
	}

	override parseMangaId(url: string): string {
		return url.replace('/manga/', '');
	}

	override parseChapterId(url: string): string {
		return url.replace('/chapter/', '');
	}

	override parseMangaUrl(url: string): string {
		return `https://mangadex.org${url}`;
	}

	override parseMangaObject(manga: BackupManga): Manga {
		let aidokuManga = super.parseMangaObject(manga);
		aidokuManga.tags = aidokuManga.tags.map((t) => t.split(':')[1]?.trim() ?? t);
		return aidokuManga;
	}
}

const MangaDexENConverter = new MangaDexConverter('2499283573021220255', 'en');
const MangaDexARConverter = new MangaDexConverter('3339599426223341161', 'ar');
const MangaDexBNConverter = new MangaDexConverter('4150470519566206911', 'bn');
const MangaDexBGConverter = new MangaDexConverter('5463447640980279236', 'bg');
const MangaDexMYConverter = new MangaDexConverter('1347402746269051958', 'my');
const MangaDexCAConverter = new MangaDexConverter('5860541308324630662', 'ca');
const MangaDexZH_HANSConverter = new MangaDexConverter('5148895169070562838', 'zh-Hans');
const MangaDexZH_HANTConverter = new MangaDexConverter('1493666528525752601', 'zh-Hant');
const MangaDexCSConverter = new MangaDexConverter('3578612018159256808', 'cs');
const MangaDexDAConverter = new MangaDexConverter('425785191804166217', 'da');
const MangaDexNLConverter = new MangaDexConverter('6750440049024086587', 'nl');
const MangaDexFILConverter = new MangaDexConverter('8578871918181236609', 'fil');
const MangaDexFIConverter = new MangaDexConverter('8254121249433835847', 'fi');
const MangaDexFRConverter = new MangaDexConverter('4505830566611664829', 'fr');
const MangaDexDEConverter = new MangaDexConverter('5098537545549490547', 'de');
const MangaDexELConverter = new MangaDexConverter('3260701926561129943', 'el');
const MangaDexHEConverter = new MangaDexConverter('1424273154577029558', 'he');
const MangaDexHIConverter = new MangaDexConverter('6840513937945146538', 'hi');
const MangaDexHUConverter = new MangaDexConverter('4284949320785450865', 'hu');
const MangaDexIDConverter = new MangaDexConverter('3807502156582598786', 'id');
const MangaDexITConverter = new MangaDexConverter('1952071260038453057', 'it');
const MangaDexJAConverter = new MangaDexConverter('1411768577036936240', 'ja');
const MangaDexKOConverter = new MangaDexConverter('3285208643537017688', 'ko');
const MangaDexLAConverter = new MangaDexConverter('764587568075398530', 'la');
const MangaDexLTConverter = new MangaDexConverter('737986167355114438', 'lt');
const MangaDexMSConverter = new MangaDexConverter('1471784905273036181', 'ms');
const MangaDexMNConverter = new MangaDexConverter('5967745367608513818', 'mn');
const MangaDexNEConverter = new MangaDexConverter('954368055061084457', 'ne');
const MangaDexNOConverter = new MangaDexConverter('4872213291993424667', 'no');
const MangaDexFAConverter = new MangaDexConverter('3781216447842245147', 'fa');
const MangaDexPLConverter = new MangaDexConverter('8033579885162383068', 'pl');
const MangaDexPT_BRConverter = new MangaDexConverter('2655149515337070132', 'pt-BR');
const MangaDexPTConverter = new MangaDexConverter('5189216366882819742', 'pt');
const MangaDexROConverter = new MangaDexConverter('4774459486579224459', 'ro');
const MangaDexRUConverter = new MangaDexConverter('2098905203823335614', 'ru');
const MangaDexSHConverter = new MangaDexConverter('4710920497926776490', 'sh');
const MangaDexES_419Converter = new MangaDexConverter('4938773340256184018', 'es-419');
const MangaDexESConverter = new MangaDexConverter('6400665728063187402', 'es');
const MangaDexSVConverter = new MangaDexConverter('1145824452519314725', 'sv');
const MangaDexTHConverter = new MangaDexConverter('1713554459881080228', 'th');
const MangaDexTRConverter = new MangaDexConverter('3846770256925560569', 'tr');
const MangaDexUKConverter = new MangaDexConverter('5779037855201976894', 'uk');
const MangaDexVIConverter = new MangaDexConverter('9194073792736219759', 'vi');

export default [
	MangaDexENConverter,
	MangaDexARConverter,
	MangaDexBNConverter,
	MangaDexBGConverter,
	MangaDexMYConverter,
	MangaDexCAConverter,
	MangaDexZH_HANSConverter,
	MangaDexZH_HANTConverter,
	MangaDexCSConverter,
	MangaDexDAConverter,
	MangaDexNLConverter,
	MangaDexFILConverter,
	MangaDexFIConverter,
	MangaDexFRConverter,
	MangaDexDEConverter,
	MangaDexELConverter,
	MangaDexHEConverter,
	MangaDexHIConverter,
	MangaDexHUConverter,
	MangaDexIDConverter,
	MangaDexITConverter,
	MangaDexJAConverter,
	MangaDexKOConverter,
	MangaDexLAConverter,
	MangaDexLTConverter,
	MangaDexMSConverter,
	MangaDexMNConverter,
	MangaDexNEConverter,
	MangaDexNOConverter,
	MangaDexFAConverter,
	MangaDexPLConverter,
	MangaDexPT_BRConverter,
	MangaDexPTConverter,
	MangaDexROConverter,
	MangaDexRUConverter,
	MangaDexSHConverter,
	MangaDexES_419Converter,
	MangaDexESConverter,
	MangaDexSVConverter,
	MangaDexTHConverter,
	MangaDexTRConverter,
	MangaDexUKConverter,
	MangaDexVIConverter,
];
