import { Chapter, Library, Manga, History } from './types/aidoku.js';
import { BackupChapter, BackupManga, BackupSource, BrokenBackupSource } from './types/tachiyomi.js';
export declare class Converter {
    /**
     * The Tachiyomi source ID for this source.
     */
    tachiyomiSource: BackupSource | BrokenBackupSource;
    /**
     * The Aidoku source ID for this source.
     */
    aidokuSourceId: string;
    constructor(source: BackupSource | BrokenBackupSource);
    static fromAidokuSource(source: string): Promise<Converter>;
    private mangaViewer;
    private tachiyomiMangaViewer;
    private mangaStatus;
    private tachiyomiMangaStatus;
    toAidokuManga(manga: BackupManga): Manga;
    toTachiyomiManga(manga: Manga, options?: {
        library?: Library;
        histories?: History[];
        chapters?: Chapter[];
        categories?: string[];
    }): Promise<BackupManga>;
    toAidokuChapter(manga: BackupManga, chapter: BackupChapter): Chapter;
    toTachiyomiChapter(chapter: Chapter, history?: History | null): BackupChapter;
}
