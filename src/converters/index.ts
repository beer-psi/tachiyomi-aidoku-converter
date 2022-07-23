import MangaDexConverters from './MangaDexConverter.js';
import NepNepConverters from './NepNepConverter.js';
import MangaBoxConverters from './MangaBoxConverter.js';
import UrlAsIdConverters from './UrlAsIdConverter.js';
import MadaraConverters from './MadaraConverter.js';

export default [
	...MangaDexConverters,
	...NepNepConverters,
	...MangaBoxConverters,
	...UrlAsIdConverters,
	...MadaraConverters,
];
