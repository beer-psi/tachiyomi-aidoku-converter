import Long from 'long';
import { Chapter, Manga } from '../types/aidoku.js';
import { BackupChapter, BackupManga } from '../types/tachiyomi.js';
export declare abstract class Converter {
    /**
     * The Tachiyomi source ID for this source.
     */
    abstract tachiyomiSourceId: Long;
    /**
     * The Aidoku source ID for this source.
     */
    abstract aidokuSourceId: string;
    /**
     * The language for this extension
     */
    abstract lang: string;
    abstract baseUrl: string;
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
    parseMangaUrl(url: string): string;
    private mangaViewer;
    private mangaStatus;
    toAidokuManga(manga: BackupManga): Manga;
    toAidokuChapter(manga: BackupManga, chapter: BackupChapter): Chapter;
}
