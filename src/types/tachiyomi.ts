import protobuf from 'protobufjs/light.js';
import Long from 'long';
export const { Message, Field, Type } = protobuf;

@Type.d()
export class BrokenBackupHistory extends Message<BrokenBackupHistory> {
	@Field.d(0, 'string')
	public url!: string;

	@Field.d(1, 'int64')
	public lastRead: Long = new Long(0);
}

@Type.d()
export class BackupHistory extends Message<BackupHistory> {
	@Field.d(1, 'string')
	public url!: string;

	@Field.d(2, 'int64')
	public lastRead: Long = new Long(0);
}

@Type.d()
export class BrokenBackupSource extends Message<BrokenBackupSource> {
	@Field.d(0, 'string')
	public name: string = '';

	@Field.d(1, 'int64')
	public sourceId: Long = new Long(0);
}

@Type.d()
export class BackupSource extends Message<BackupSource> {
	@Field.d(1, 'string')
	public name: string = '';

	@Field.d(2, 'int64')
	public sourceId: Long = new Long(0);
}

@Type.d()
export class BackupCategory extends Message<BackupCategory> {
	@Field.d(1, 'string')
	public name!: string;

	@Field.d(2, 'int64')
	public order: Long = new Long(0);

	@Field.d(100, 'int64')
	public flags: Long = new Long(0);
}

@Type.d()
export class BackupChapter extends Message<BackupChapter> {
	@Field.d(1, 'string')
	public url!: string;

	@Field.d(2, 'string')
	public name!: string;

	@Field.d(3, 'string', 'optional')
	public scanlator?: string;

	@Field.d(4, 'bool')
	public read: boolean = false;

	@Field.d(5, 'bool')
	public bookmark: boolean = false;

	@Field.d(6, 'int32')
	public lastPageRead: number = 0;

	@Field.d(7, 'int64')
	public dateFetch: Long = new Long(0);

	@Field.d(8, 'int64')
	public dateUpload: Long = new Long(0);

	@Field.d(9, 'float')
	public chapterNumber: number = 0;

	@Field.d(10, 'int32')
	public sourceOrder: number = 0;
}

@Type.d()
export class BackupTracking extends Message<BackupTracking> {
	@Field.d(1, 'int32')
	public syncId!: number;

	@Field.d(2, 'int64')
	public libraryId: Long = new Long(0);

	@Field.d(3, 'int32')
	public mediaIdInt: number = 0;

	@Field.d(4, 'string')
	public trackingUrl: string = '';

	@Field.d(5, 'string')
	public title: string = '';

	@Field.d(6, 'float')
	public lastChapterRead: number = 0;

	@Field.d(7, 'int32')
	public totalChapters: number = 0;

	@Field.d(8, 'float')
	public score: number = 0.0;

	@Field.d(9, 'int32')
	public status: number = 0;

	@Field.d(10, 'int64')
	public startedReadingDate: Long = new Long(0);

	@Field.d(11, 'int64')
	public finishedReadingDate: Long = new Long(0);

	@Field.d(100, 'int64')
	public mediaId: Long = new Long(0);
}

@Type.d()
export class BackupManga extends Message<BackupManga> {
	@Field.d(1, 'int64')
	public source: Long = new Long(0);

	@Field.d(2, 'string')
	public url!: string;

	@Field.d(3, 'string')
	public title: string = '';

	@Field.d(4, 'string', 'optional')
	public artist?: string;

	@Field.d(5, 'string', 'optional')
	public author?: string;

	@Field.d(6, 'string', 'optional')
	public description?: string;

	@Field.d(7, 'string', 'repeated')
	public genre: string[] = [];

	@Field.d(8, 'int32')
	public status: number = 0;

	@Field.d(9, 'string', 'optional')
	public thumbnailUrl?: string;

	@Field.d(13, 'int64')
	public dateAdded: Long = new Long(0);

	@Field.d(14, 'int32')
	public viewer: number = 0;

	@Field.d(16, BackupChapter, 'repeated')
	public chapters: BackupChapter[] = [];

	@Field.d(17, 'int64', 'repeated')
	public categories: Long[] = [];

	@Field.d(18, BackupTracking, 'repeated')
	public tracking: BackupTracking[] = [];

	@Field.d(100, 'bool')
	public favorite: boolean = false;

	@Field.d(101, 'int32')
	public chapterFlags: number = 0;

	@Field.d(102, BrokenBackupHistory, 'repeated')
	public brokenHistory: BrokenBackupHistory[] = [];

	@Field.d(103, 'int32', 'optional')
	public viewerFlags?: number;

	@Field.d(104, BackupHistory, 'repeated')
	public history: BackupHistory[] = [];
}

@Type.d()
export class Backup extends Message<Backup> {
	@Field.d(1, BackupManga, 'repeated')
	public backupManga: BackupManga[] = [];

	@Field.d(2, BackupCategory, 'repeated')
	public backupCategories: BackupCategory[] = [];

	@Field.d(100, BrokenBackupSource, 'repeated')
	public backupBrokenSources: BrokenBackupSource[] = [];

	@Field.d(101, BackupSource, 'repeated')
	public backupSources: BackupSource[] = [];
}
