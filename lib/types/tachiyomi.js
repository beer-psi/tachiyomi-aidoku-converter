var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import protobuf from 'protobufjs/light.js';
import Long from 'long';
export const { Message, Field, Type } = protobuf;
let BrokenBackupHistory = class BrokenBackupHistory extends Message {
    constructor() {
        super(...arguments);
        this.lastRead = new Long(0);
    }
};
__decorate([
    Field.d(0, 'string')
], BrokenBackupHistory.prototype, "url", void 0);
__decorate([
    Field.d(1, 'int64')
], BrokenBackupHistory.prototype, "lastRead", void 0);
BrokenBackupHistory = __decorate([
    Type.d()
], BrokenBackupHistory);
export { BrokenBackupHistory };
let BackupHistory = class BackupHistory extends Message {
    constructor() {
        super(...arguments);
        this.lastRead = new Long(0);
    }
};
__decorate([
    Field.d(1, 'string')
], BackupHistory.prototype, "url", void 0);
__decorate([
    Field.d(2, 'int64')
], BackupHistory.prototype, "lastRead", void 0);
BackupHistory = __decorate([
    Type.d()
], BackupHistory);
export { BackupHistory };
let BrokenBackupSource = class BrokenBackupSource extends Message {
    constructor() {
        super(...arguments);
        this.name = '';
        this.sourceId = new Long(0);
    }
};
__decorate([
    Field.d(0, 'string')
], BrokenBackupSource.prototype, "name", void 0);
__decorate([
    Field.d(1, 'int64')
], BrokenBackupSource.prototype, "sourceId", void 0);
BrokenBackupSource = __decorate([
    Type.d()
], BrokenBackupSource);
export { BrokenBackupSource };
let BackupSource = class BackupSource extends Message {
    constructor() {
        super(...arguments);
        this.name = '';
        this.sourceId = new Long(0);
    }
};
__decorate([
    Field.d(1, 'string')
], BackupSource.prototype, "name", void 0);
__decorate([
    Field.d(2, 'int64')
], BackupSource.prototype, "sourceId", void 0);
BackupSource = __decorate([
    Type.d()
], BackupSource);
export { BackupSource };
let BackupCategory = class BackupCategory extends Message {
    constructor() {
        super(...arguments);
        this.order = new Long(0);
        this.flags = new Long(0);
    }
};
__decorate([
    Field.d(1, 'string')
], BackupCategory.prototype, "name", void 0);
__decorate([
    Field.d(2, 'int64')
], BackupCategory.prototype, "order", void 0);
__decorate([
    Field.d(100, 'int64')
], BackupCategory.prototype, "flags", void 0);
BackupCategory = __decorate([
    Type.d()
], BackupCategory);
export { BackupCategory };
let BackupChapter = class BackupChapter extends Message {
    constructor() {
        super(...arguments);
        this.read = false;
        this.bookmark = false;
        this.lastPageRead = 0;
        this.dateFetch = new Long(0);
        this.dateUpload = new Long(0);
        this.chapterNumber = 0;
        this.sourceOrder = 0;
    }
};
__decorate([
    Field.d(1, 'string')
], BackupChapter.prototype, "url", void 0);
__decorate([
    Field.d(2, 'string')
], BackupChapter.prototype, "name", void 0);
__decorate([
    Field.d(3, 'string', 'optional')
], BackupChapter.prototype, "scanlator", void 0);
__decorate([
    Field.d(4, 'bool')
], BackupChapter.prototype, "read", void 0);
__decorate([
    Field.d(5, 'bool')
], BackupChapter.prototype, "bookmark", void 0);
__decorate([
    Field.d(6, 'int32')
], BackupChapter.prototype, "lastPageRead", void 0);
__decorate([
    Field.d(7, 'int64')
], BackupChapter.prototype, "dateFetch", void 0);
__decorate([
    Field.d(8, 'int64')
], BackupChapter.prototype, "dateUpload", void 0);
__decorate([
    Field.d(9, 'float')
], BackupChapter.prototype, "chapterNumber", void 0);
__decorate([
    Field.d(10, 'int32')
], BackupChapter.prototype, "sourceOrder", void 0);
BackupChapter = __decorate([
    Type.d()
], BackupChapter);
export { BackupChapter };
let BackupTracking = class BackupTracking extends Message {
    constructor() {
        super(...arguments);
        this.libraryId = new Long(0);
        this.mediaIdInt = 0;
        this.trackingUrl = '';
        this.title = '';
        this.lastChapterRead = 0;
        this.totalChapters = 0;
        this.score = 0.0;
        this.status = 0;
        this.startedReadingDate = new Long(0);
        this.finishedReadingDate = new Long(0);
        this.mediaId = new Long(0);
    }
};
__decorate([
    Field.d(1, 'int32')
], BackupTracking.prototype, "syncId", void 0);
__decorate([
    Field.d(2, 'int64')
], BackupTracking.prototype, "libraryId", void 0);
__decorate([
    Field.d(3, 'int32')
], BackupTracking.prototype, "mediaIdInt", void 0);
__decorate([
    Field.d(4, 'string')
], BackupTracking.prototype, "trackingUrl", void 0);
__decorate([
    Field.d(5, 'string')
], BackupTracking.prototype, "title", void 0);
__decorate([
    Field.d(6, 'float')
], BackupTracking.prototype, "lastChapterRead", void 0);
__decorate([
    Field.d(7, 'int32')
], BackupTracking.prototype, "totalChapters", void 0);
__decorate([
    Field.d(8, 'float')
], BackupTracking.prototype, "score", void 0);
__decorate([
    Field.d(9, 'int32')
], BackupTracking.prototype, "status", void 0);
__decorate([
    Field.d(10, 'int64')
], BackupTracking.prototype, "startedReadingDate", void 0);
__decorate([
    Field.d(11, 'int64')
], BackupTracking.prototype, "finishedReadingDate", void 0);
__decorate([
    Field.d(100, 'int64')
], BackupTracking.prototype, "mediaId", void 0);
BackupTracking = __decorate([
    Type.d()
], BackupTracking);
export { BackupTracking };
let BackupManga = class BackupManga extends Message {
    constructor() {
        super(...arguments);
        this.source = new Long(0);
        this.title = '';
        this.genre = [];
        this.status = 0;
        this.dateAdded = new Long(0);
        this.viewer = 0;
        this.chapters = [];
        this.categories = [];
        this.tracking = [];
        this.favorite = false;
        this.chapterFlags = 0;
        this.brokenHistory = [];
        this.history = [];
    }
};
__decorate([
    Field.d(1, 'int64')
], BackupManga.prototype, "source", void 0);
__decorate([
    Field.d(2, 'string')
], BackupManga.prototype, "url", void 0);
__decorate([
    Field.d(3, 'string')
], BackupManga.prototype, "title", void 0);
__decorate([
    Field.d(4, 'string', 'optional')
], BackupManga.prototype, "artist", void 0);
__decorate([
    Field.d(5, 'string', 'optional')
], BackupManga.prototype, "author", void 0);
__decorate([
    Field.d(6, 'string', 'optional')
], BackupManga.prototype, "description", void 0);
__decorate([
    Field.d(7, 'string', 'repeated')
], BackupManga.prototype, "genre", void 0);
__decorate([
    Field.d(8, 'int32')
], BackupManga.prototype, "status", void 0);
__decorate([
    Field.d(9, 'string', 'optional')
], BackupManga.prototype, "thumbnailUrl", void 0);
__decorate([
    Field.d(13, 'int64')
], BackupManga.prototype, "dateAdded", void 0);
__decorate([
    Field.d(14, 'int32')
], BackupManga.prototype, "viewer", void 0);
__decorate([
    Field.d(16, BackupChapter, 'repeated')
], BackupManga.prototype, "chapters", void 0);
__decorate([
    Field.d(17, 'int64', 'repeated')
], BackupManga.prototype, "categories", void 0);
__decorate([
    Field.d(18, BackupTracking, 'repeated')
], BackupManga.prototype, "tracking", void 0);
__decorate([
    Field.d(100, 'bool')
], BackupManga.prototype, "favorite", void 0);
__decorate([
    Field.d(101, 'int32')
], BackupManga.prototype, "chapterFlags", void 0);
__decorate([
    Field.d(102, BrokenBackupHistory, 'repeated')
], BackupManga.prototype, "brokenHistory", void 0);
__decorate([
    Field.d(103, 'int32', 'optional')
], BackupManga.prototype, "viewerFlags", void 0);
__decorate([
    Field.d(104, BackupHistory, 'repeated')
], BackupManga.prototype, "history", void 0);
BackupManga = __decorate([
    Type.d()
], BackupManga);
export { BackupManga };
let Backup = class Backup extends Message {
    constructor() {
        super(...arguments);
        this.backupManga = [];
        this.backupCategories = [];
        this.backupBrokenSources = [];
        this.backupSources = [];
    }
};
__decorate([
    Field.d(1, BackupManga, 'repeated')
], Backup.prototype, "backupManga", void 0);
__decorate([
    Field.d(2, BackupCategory, 'repeated')
], Backup.prototype, "backupCategories", void 0);
__decorate([
    Field.d(100, BrokenBackupSource, 'repeated')
], Backup.prototype, "backupBrokenSources", void 0);
__decorate([
    Field.d(101, BackupSource, 'repeated')
], Backup.prototype, "backupSources", void 0);
Backup = __decorate([
    Type.d()
], Backup);
export { Backup };
