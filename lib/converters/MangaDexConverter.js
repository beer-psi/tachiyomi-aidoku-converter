import Long from 'long';
import { Converter } from './AbstractConverter.js';
class MangaDexConverter extends Converter {
    constructor(tachiyomiSourceId, lang) {
        super();
        this.tachiyomiSourceId = tachiyomiSourceId;
        this.lang = lang;
        this.aidokuSourceId = 'multi.mangadex';
        this.baseUrl = 'https://mangadex.org';
    }
    parseMangaId(url) {
        return url.replace('/manga/', '');
    }
    parseChapterId(url) {
        return url.replace('/chapter/', '');
    }
    toAidokuManga(manga) {
        var _a;
        let aidokuManga = super.toAidokuManga(manga);
        aidokuManga.tags = (_a = aidokuManga.tags) === null || _a === void 0 ? void 0 : _a.map((t) => { var _a, _b; return (_b = (_a = t.split(':')[1]) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : t; });
        return aidokuManga;
    }
}
const MangaDexENConverter = new MangaDexConverter(new Long(-85582433, 581909802, false), 'en'); // 2499283573021220255
const MangaDexARConverter = new MangaDexConverter(new Long(-198967703, 777561083, false), 'ar'); // 3339599426223341161
const MangaDexBNConverter = new MangaDexConverter(new Long(-1988524097, 966356722, false), 'bn'); // 4150470519566206911
const MangaDexBGConverter = new MangaDexConverter(new Long(-778874940, 1272058030, false), 'bg'); // 5463447640980279236
const MangaDexMYConverter = new MangaDexConverter(new Long(-1396659146, 313716648, false), 'my'); // 1347402746269051958
const MangaDexCAConverter = new MangaDexConverter(new Long(-97431418, 1364513604, false), 'ca'); // 5860541308324630662
const MangaDexZH_HANSConverter = new MangaDexConverter(new Long(1378680342, 1198820576, false), // 5148895169070562838
'zh-Hans');
const MangaDexZH_HANTConverter = new MangaDexConverter(new Long(1034623257, 347771339, false), // 1493666528525752601
'zh-Hant');
const MangaDexCSConverter = new MangaDexConverter(new Long(-1823243032, 833210539, false), 'cs'); // 3578612018159256808
const MangaDexDAConverter = new MangaDexConverter(new Long(1142677577, 99135840, false), 'da'); // 425785191804166217
const MangaDexNLConverter = new MangaDexConverter(new Long(-1884900805, 1571709301, false), 'nl'); // 6750440049024086587
const MangaDexFILConverter = new MangaDexConverter(new Long(-2000404607, 1997424270, false), 'fil'); // 8578871918181236609
const MangaDexFIConverter = new MangaDexConverter(new Long(1300355399, 1921812363, false), 'fi'); // 8254121249433835847
const MangaDexFRConverter = new MangaDexConverter(new Long(83640253, 1049095431, false), 'fr'); // 4505830566611664829
const MangaDexDEConverter = new MangaDexConverter(new Long(1819814259, 1187095778, false), 'de'); // 5098537545549490547
const MangaDexELConverter = new MangaDexConverter(new Long(1394320855, 759191328, false), 'el'); // 3260701926561129943
const MangaDexHEConverter = new MangaDexConverter(new Long(1370511798, 331614435, false), 'he'); // 1424273154577029558
const MangaDexHIConverter = new MangaDexConverter(new Long(408171690, 1592681263, false), 'hi'); // 6840513937945146538
const MangaDexHUConverter = new MangaDexConverter(new Long(1643632497, 997667508, false), 'hu'); // 4284949320785450865
const MangaDexIDConverter = new MangaDexConverter(new Long(-727467902, 886503177, false), 'id'); // 3807502156582598786
const MangaDexITConverter = new MangaDexConverter(new Long(-287877311, 454502007, false), 'it'); // 1952071260038453057
const MangaDexJAConverter = new MangaDexConverter(new Long(2069390384, 328702986, false), 'ja'); // 1411768577036936240
const MangaDexKOConverter = new MangaDexConverter(new Long(51452760, 764897243, false), 'ko'); // 3285208643537017688
const MangaDexLAConverter = new MangaDexConverter(new Long(-1697620606, 178019415, false), 'la'); // 764587568075398530
const MangaDexLTConverter = new MangaDexConverter(new Long(1515881414, 171825794, false), 'lt'); // 737986167355114438
const MangaDexMSConverter = new MangaDexConverter(new Long(-795554411, 342676626, false), 'ms'); // 1471784905273036181
const MangaDexMNConverter = new MangaDexConverter(new Long(441046298, 1389473995, false), 'mn'); // 5967745367608513818
const MangaDexNEConverter = new MangaDexConverter(new Long(-1964672727, 222206128, false), 'ne'); // 954368055061084457
const MangaDexNOConverter = new MangaDexConverter(new Long(-885759205, 1134400556, false), 'no'); // 4872213291993424667
const MangaDexFAConverter = new MangaDexConverter(new Long(1484806683, 880383059, false), 'fa'); // 3781216447842245147
const MangaDexPLConverter = new MangaDexConverter(new Long(-2116827428, 1870463575, false), 'pl'); // 8033579885162383068
const MangaDexPT_BRConverter = new MangaDexConverter(new Long(-1489537484, 618200170, false), // 2655149515337070132
'pt-BR');
const MangaDexPTConverter = new MangaDexConverter(new Long(-1028551010, 1208208586, false), 'pt'); // 5189216366882819742
const MangaDexROConverter = new MangaDexConverter(new Long(1544318859, 1111640475, false), 'ro'); // 4774459486579224459
const MangaDexRUConverter = new MangaDexConverter(new Long(-1826891586, 488689449, false), 'ru'); // 2098905203823335614
const MangaDexSHConverter = new MangaDexConverter(new Long(-1140316502, 1096846651, false), 'sh'); // 4710920497926776490
const MangaDexES_419Converter = new MangaDexConverter(new Long(-1406949678, 1149897775, false), // 4938773340256184018
'es-419');
const MangaDexESConverter = new MangaDexConverter(new Long(1194928586, 1490271121, false), 'es'); // 6400665728063187402
const MangaDexSVConverter = new MangaDexConverter(new Long(-882981595, 266783044, false), 'sv'); // 1145824452519314725
const MangaDexTHConverter = new MangaDexConverter(new Long(-729840220, 398967987, false), 'th'); // 1713554459881080228
const MangaDexTRConverter = new MangaDexConverter(new Long(-392818951, 895645994, false), 'tr'); // 3846770256925560569
const MangaDexUKConverter = new MangaDexConverter(new Long(-2032573890, 1345537103, false), 'uk'); // 5779037855201976894
const MangaDexVIConverter = new MangaDexConverter(new Long(-154840465, 2140662118, false), 'vi'); // 9194073792736219759
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
