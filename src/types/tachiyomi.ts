import protobuf from 'protobufjs/light';
import Long from 'long';
export const { Message, Field, Type } = protobuf;

@Type.d()
export class BrokenBackupHistory extends Message<BrokenBackupHistory> {
	@Field.d(0, 'string', 'required')
	public url!: string;

	@Field.d(1, 'int64', 'required')
	public lastRead!: Long;
}

@Type.d()
export class BackupHistory extends Message<BackupHistory> {
	@Field.d(1, 'string', 'required')
	public url!: string;

	@Field.d(2, 'int64', 'required')
	public lastRead!: Long;
}

@Type.d()
export class BrokenBackupSource extends Message<BrokenBackupSource> {
	@Field.d(0, 'string', 'optional')
	public name: string = '';

	@Field.d(1, 'int64', 'required')
	public sourceId!: Long;
}

@Type.d()
export class BackupSource extends Message<BackupSource> {
	@Field.d(1, 'string', 'optional')
	public name: string = '';

	@Field.d(2, 'int64', 'required')
	public sourceId!: Long;
}

@Type.d()
export class BackupCategory extends Message<BackupCategory> {
	@Field.d(1, 'string', 'required')
	public name!: string;

	@Field.d(2, 'int64', 'optional')
	public order: Long = new Long(0);

	@Field.d(100, 'int64', 'optional')
	public flags: Long = new Long(0);
}

@Type.d()
export class BackupChapter extends Message<BackupChapter> {
	@Field.d(1, 'string', 'required')
	public url!: string;

	@Field.d(2, 'string', 'required')
	public name!: string;

	@Field.d(3, 'string', 'optional')
	public scanlator?: string;

	@Field.d(4, 'bool', 'optional')
	public read: boolean = false;

	@Field.d(5, 'bool', 'optional')
	public bookmark: boolean = false;

	@Field.d(6, 'int32', 'optional')
	public lastPageRead: number = 0;

	@Field.d(7, 'int64', 'optional')
	public dateFetch: Long = new Long(0);

	@Field.d(8, 'int64', 'optional')
	public dateUpload: Long = new Long(0);

	@Field.d(9, 'float', 'optional')
	public chapterNumber: number = 0;

	@Field.d(10, 'int32', 'optional')
	public sourceOrder: number = 0;
}

@Type.d()
export class BackupTracking extends Message<BackupTracking> {
	@Field.d(1, 'int32', 'required')
	public syncId!: number;

	@Field.d(2, 'int64', 'required')
	public libraryId!: Long;

	@Field.d(3, 'int32', 'optional')
	public mediaIdInt: number = 0;

	@Field.d(4, 'string', 'optional')
	public trackingUrl: string = '';

	@Field.d(5, 'string', 'optional')
	public title: string = '';

	@Field.d(6, 'float', 'optional')
	public lastChapterRead: number = 0.0;

	@Field.d(7, 'int32', 'optional')
	public totalChapters: number = 0;

	@Field.d(8, 'float', 'optional')
	public score: number = 0.0;

	@Field.d(9, 'int32', 'optional')
	public status: number = 0;

	@Field.d(10, 'int64', 'optional')
	public startedReadingDate: Long = new Long(0);

	@Field.d(11, 'int64', 'optional')
	public finishedReadingDate: Long = new Long(0);

	@Field.d(100, 'int64', 'optional')
	public mediaId: Long = new Long(0);
}

@Type.d()
export class BackupManga extends Message<BackupManga> {
	@Field.d(1, 'int64', 'required')
	public source!: Long;

	@Field.d(2, 'string', 'required')
	public url!: string;

	@Field.d(3, 'string', 'optional')
	public title: string = '';

	@Field.d(4, 'string', 'optional')
	public artist?: string;

	@Field.d(5, 'string', 'optional')
	public author?: string;

	@Field.d(6, 'string', 'optional')
	public description?: string;

	@Field.d(7, 'string', 'repeated')
	public genre: string[] = [];

	@Field.d(8, 'int32', 'optional')
	public status: number = 0;

	@Field.d(9, 'string', 'optional')
	public thumbnailUrl?: string;

	@Field.d(13, 'int64', 'optional')
	public dateAdded: Long = new Long(0);

	@Field.d(14, 'int32', 'optional')
	public viewer: number = 0;

	@Field.d(16, BackupChapter, 'repeated')
	public chapters: BackupChapter[] = [];

	@Field.d(17, 'int64', 'repeated')
	public categories: Long[] = [];

	@Field.d(18, BackupTracking, 'repeated')
	public tracking: BackupTracking[] = [];

	@Field.d(100, 'bool', 'optional')
	public favorite: boolean = false;

	@Field.d(101, 'int32', 'optional')
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
