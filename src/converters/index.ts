import MangaDexConverters from './MangaDexConverter';
import NepNepConverters from './NepNepConverter';
import MangaBoxConverters from './MangaBoxConverter';
import UrlAsIdConverters from './UrlAsIdConverter';
import MadaraConverters from './MadaraConverter';

export default [
	...MangaDexConverters,
	...NepNepConverters,
	...MangaBoxConverters,
	...UrlAsIdConverters,
	...MadaraConverters,
];
