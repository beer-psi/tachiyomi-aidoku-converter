import protobuf from 'protobufjs/light.js';
import Long from 'long';
export declare const Message: typeof protobuf.Message, Field: typeof protobuf.Field, Type: typeof protobuf.Type;
export declare class BrokenBackupHistory extends Message<BrokenBackupHistory> {
    url: string;
    lastRead: Long;
}
export declare class BackupHistory extends Message<BackupHistory> {
    url: string;
    lastRead: Long;
}
export declare class BrokenBackupSource extends Message<BrokenBackupSource> {
    name: string;
    sourceId: Long;
}
export declare class BackupSource extends Message<BackupSource> {
    name: string;
    sourceId: Long;
}
export declare class BackupCategory extends Message<BackupCategory> {
    name: string;
    order: Long;
    flags: Long;
}
export declare class BackupChapter extends Message<BackupChapter> {
    url: string;
    name: string;
    scanlator?: string;
    read: boolean;
    bookmark: boolean;
    lastPageRead: number;
    dateFetch: Long;
    dateUpload: Long;
    chapterNumber: number;
    sourceOrder: number;
}
export declare class BackupTracking extends Message<BackupTracking> {
    syncId: number;
    libraryId: Long;
    mediaIdInt: number;
    trackingUrl: string;
    title: string;
    lastChapterRead: number;
    totalChapters: number;
    score: number;
    status: number;
    startedReadingDate: Long;
    finishedReadingDate: Long;
    mediaId: Long;
}
export declare class BackupManga extends Message<BackupManga> {
    source: Long;
    url: string;
    title: string;
    artist?: string;
    author?: string;
    description?: string;
    genre: string[];
    status: number;
    thumbnailUrl?: string;
    dateAdded: Long;
    viewer: number;
    chapters: BackupChapter[];
    categories: Long[];
    tracking: BackupTracking[];
    favorite: boolean;
    chapterFlags: number;
    brokenHistory: BrokenBackupHistory[];
    viewerFlags?: number;
    history: BackupHistory[];
}
export declare class Backup extends Message<Backup> {
    backupManga: BackupManga[];
    backupCategories: BackupCategory[];
    backupBrokenSources: BrokenBackupSource[];
    backupSources: BackupSource[];
}
