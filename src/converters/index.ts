import { Converter } from './AbstractConverter.js';
import MangaDexConverters from './MangaDexConverter.js';
import NepNepConverters from './NepNepConverter.js';
import MangaBoxConverters from './MangaBoxConverter.js';
import UrlAsIdConverters from './UrlAsIdConverter.js';
import MadaraConverters from './MadaraConverter.js';
import NHentaiConverters from './NHentaiConverter.js';
import DynastyConverters from './DynastyConverter.js';

import YuriNekoConverter from './YuriNekoConverter.js';
import HentaiVNConverter from './HentaiVNConverter.js';
import KoushokuConverter from './KoushokuConverter.js';
import DmzjConverter from './DmzjConverter.js';
import HentaiFoxConverter from './HentaiFoxConverter.js';

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
	...DmzjConverter,
	...HentaiFoxConverter,
] as unknown[] as Converter[];
