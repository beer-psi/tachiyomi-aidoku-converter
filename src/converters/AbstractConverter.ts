import { Chapter, Manga, MangaStatus, MangaViewer } from '../types/aidoku.js';
import { BackupChapter, BackupManga } from '../types/TachiyomiModels.js';

export abstract class Converter {
	/**
	 * The Tachiyomi source ID for this source.
	 */
	abstract tachiyomiSourceId: string;

	/**
	 * The Aidoku source ID for this source.
	 */
	abstract aidokuSourceId: string;

	/**
	 * The language for this extension
	 */
	abstract lang: string;

	/**
	 * Converts a Tachiyomi BackupManga.url to an Aidoku manga identifier.
	 * @param url
	 */
	abstract parseMangaId(url: string): string;

	/**
	 * Converts a Tachiyomi BackupChapter.url to an Aidoku chapter identifier.
	 * @param url
	 */
	abstract parseChapterId(url: string): string;

	abstract parseMangaUrl(url: string): string;

	private mangaViewer: { [key: number]: MangaViewer } = {
		1: MangaViewer.LTR,
		2: MangaViewer.RTL,
		3: MangaViewer.Vertical,
		4: MangaViewer.Scroll, // Webtoon viewer
		5: MangaViewer.Scroll, // Continuous vertical
	};

	private mangaStatus: { [key: number]: MangaStatus } = {
		0: MangaStatus.Unknown,
		1: MangaStatus.Ongoing,
		2: MangaStatus.Completed,
		3: MangaStatus.Unknown, // Licensed
		4: MangaStatus.Completed, // Publishing finished
		5: MangaStatus.Cancelled,
		6: MangaStatus.Hiatus,
	};

	parseMangaObject(manga: BackupManga): Manga {
		return {
			id: this.parseMangaId(manga.url),
			lastUpdate: 0, // Not available,
			author: manga.author ?? '',
			url: this.parseMangaUrl(manga.url),
			nsfw: 0, // Not available
			tags: manga.genre,
			title: manga.title,
			sourceId: this.aidokuSourceId,
			desc: manga.description ?? '',
			cover: manga.thumbnailUrl ?? '',
			viewer: this.mangaViewer[manga.viewer] ?? MangaViewer.Default,
			status: this.mangaStatus[manga.status] ?? MangaStatus.Unknown,
		};
	}

	parseChapterObject(manga: BackupManga, chapter: BackupChapter): Chapter {
		return {
			sourceId: this.aidokuSourceId,
			mangaId: this.parseMangaId(manga.url),
			lang: this.lang,
			id: this.parseChapterId(chapter.url),
			scanlator: chapter.scanlator ?? '',
			dateUploaded: chapter.dateUpload.divide(1000).toNumber(),
			chapter: chapter.chapterNumber,
			sourceOrder: chapter.sourceOrder,
		};
	}
}
