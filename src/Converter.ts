import Long from 'long';
import { Chapter, Manga, MangaStatus, MangaViewer } from './types/aidoku.js';
import { BackupChapter, BackupManga, BackupSource, BrokenBackupSource } from './types/tachiyomi.js';

export class Converter {
	/**
	 * The Tachiyomi source ID for this source.
	 */
	tachiyomiSourceId: Long;

	/**
	 * The Aidoku source ID for this source.
	 */
	aidokuSourceId: string;

	constructor(tachiyomiSource: BackupSource | BrokenBackupSource) {
		this.tachiyomiSourceId = tachiyomiSource.sourceId;
		this.aidokuSourceId = tachiyomiSource.name.toLowerCase();
	}

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

	toAidokuManga(manga: BackupManga): Manga {
		return {
			id: manga.url,
			author: manga.author ?? '',
			url: manga.url,
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

	toAidokuChapter(manga: BackupManga, chapter: BackupChapter): Chapter {
		return {
			sourceId: this.aidokuSourceId,
			mangaId: manga.url,
			lang: '',
			id: chapter.url,
			scanlator: chapter.scanlator ?? '',
			dateUploaded: new Date(chapter.dateUpload.toNumber()),
			chapter: chapter.chapterNumber,
			sourceOrder: chapter.sourceOrder,
		};
	}
}
