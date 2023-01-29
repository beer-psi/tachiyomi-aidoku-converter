import Long from 'long';
import { Chapter, Manga } from './types/aidoku.js';
import { BackupChapter, BackupManga, BackupSource, BrokenBackupSource } from './types/tachiyomi.js';
export declare class Converter {
    /**
     * The Tachiyomi source ID for this source.
     */
    tachiyomiSourceId: Long;
    /**
     * The Aidoku source ID for this source.
     */
    aidokuSourceId: string;
    constructor(tachiyomiSource: BackupSource | BrokenBackupSource);
    private mangaViewer;
    private mangaStatus;
    toAidokuManga(manga: BackupManga): Manga;
    toAidokuChapter(manga: BackupManga, chapter: BackupChapter): Chapter;
}
