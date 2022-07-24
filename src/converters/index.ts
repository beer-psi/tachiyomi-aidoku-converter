import { Converter } from './AbstractConverter';
import MangaDexConverters from './MangaDexConverter';
import NepNepConverters from './NepNepConverter';
import MangaBoxConverters from './MangaBoxConverter';
import UrlAsIdConverters from './UrlAsIdConverter';
import MadaraConverters from './MadaraConverter';
import NHentaiConverters from './NHentaiConverter';
import DynastyConverters from './DynastyConverter';
import YuriNekoConverter from './YuriNekoConverter';
import HentaiVNConverter from './HentaiVNConverter';
import KoushokuConverter from './KoushokuConverter';

export default [
	...MangaDexConverters,
	...NepNepConverters,
	...MangaBoxConverters,
	...UrlAsIdConverters,
	...MadaraConverters,
	...NHentaiConverters,
	...DynastyConverters,
	...YuriNekoConverter,
	...HentaiVNConverter,
	...KoushokuConverter,
] as unknown[] as Converter[];
