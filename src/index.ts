import fs from "fs";
import converters from "./converters/index.js";
import { Backup } from "./types/TachiyomiModels.js";
import { AidokuBackup } from "./types/aidoku.js";

interface AidokuResult {
    backup: AidokuBackup
    dateString: string
}

export default function toAidoku(backup: Buffer): AidokuResult {
    const dateString = new Date(Date.now()).toISOString().split('T')[0]

    const decoded: Backup = Backup.decode(backup)
    const categoriesMap = Object.fromEntries(decoded.backupCategories.map(c => [c.order.toString(), c.name]));
    
    const aidokuBackup: AidokuBackup = {
        library: [],
        history: [],
        sources: [],
        manga: [],
        chapters: [],
        trackItems: [], // TODO
        categories: decoded.backupCategories.map(c => c.name),
        date: Math.floor(Date.now() / 1000),
        name: `Converted Tachiyomi Backup ${dateString}`,
        version: "0.0.1",
    }
    
    const convertersNotFound: string[] = [];
    
    for (const manga of decoded.backupManga) {
        const converter = converters.find(c => c.tachiyomiSourceId === manga.source.toString());
        if (!converter) {
            if (!convertersNotFound.includes(manga.source.toString())) {
                convertersNotFound.push(manga.source.toString())
            }
            continue;
        }

        if (!aidokuBackup.sources.includes(converter.aidokuSourceId)) {
            aidokuBackup.sources.push(converter.aidokuSourceId);
        }

        const aidokuManga = converter.parseMangaObject(manga);

        aidokuBackup.manga.push(aidokuManga);
        
        aidokuBackup.library.push({
            mangaId: aidokuManga.id,
            lastUpdated: 0,
            categories: manga.categories.map(c => categoriesMap[c.toString()]).filter(c => c !== undefined),
            dateAdded: Math.floor(manga.dateAdded.divide(1000).toNumber()),
            sourceId: converter.aidokuSourceId,
            lastOpened: 0,
        });
        
        manga.chapters.forEach(chapter => {
            const aidokuChapter = converter.parseChapterObject(manga, chapter)
            
            aidokuBackup.chapters.push(aidokuChapter);
            
            aidokuBackup.history.push({
                progress: chapter.lastPageRead,
                mangaId: aidokuManga.id,
                chapterId: aidokuChapter.id,
                completed: chapter.read,
                sourceId: converter.aidokuSourceId,
                dateRead: Math.floor(manga.history.find(h => h.url === chapter.url)?.lastRead?.divide(1000).toNumber() ?? 0),
            })
        })
    }

    if (convertersNotFound.length > 0) {
        console.log(`Could not find converters for ${convertersNotFound.length} sources. Your library may not be complete.`)
    }

    return {
        backup: aidokuBackup,
        dateString: dateString,
    }
}


