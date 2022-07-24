export interface AidokuBackup {
	library: Library[];
	history: History[];
	manga: Manga[];
	chapters: Chapter[];
	sources: string[];
	categories: string[];
	trackItems: TrackItem[];
	date: Date;
	name?: string;
	version: string;
}

export interface History {
	progress?: number;
	total?: number;
	mangaId: string;
	chapterId: string;
	completed: boolean;
	sourceId: string;
	dateRead: Date;
}

export interface Manga {
	id: string;
	sourceId: string;
	title: string;
	author?: string;
	artist?: string;
	desc?: string;
	tags?: string[];
	cover?: string;
	url?: string;
	status: number;
	nsfw: number;
	viewer: number;
}

export interface Chapter {
	sourceId: string;
	mangaId: string;
	id: string;
	title?: string;
	scanlator?: string;
	lang: string;
	chapter?: number;
	volume?: number;
	dateUploaded?: Date;
	sourceOrder: number;
}

export interface Library {
	lastOpened: Date;
	lastUpdated: Date;
	lastRead?: Date;
	dateAdded: Date;
	categories: string[];

	mangaId: string;
	sourceId: string;
}

export interface TrackItem {
	id: string;
	trackerId: string;
	mangaId: string;
	sourceId: string;
	title?: string;
}

export enum MangaViewer {
	Default = 0,
	RTL = 1,
	LTR = 2,
	Vertical = 3,
	Scroll = 4,
}

export enum MangaStatus {
	Unknown = 0,
	Ongoing = 1,
	Completed = 2,
	Cancelled = 3,
	Hiatus = 4,
}
