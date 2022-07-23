import fs from "fs";
import { Backup } from "./types/TachiyomiModels.js";
import { AidokuBackup } from "./types/aidoku.js";

let contents = fs.readFileSync("D:\\Downloads\\tachiyomi_2022-05-18_17-33.proto")
let decoded = Backup.decode(contents)

let aidokuBackup: AidokuBackup = {
    library: [],
    history: [],
    sources: ["multi.mangadex"],
    manga: [],
    chapters: [],
    categories: decoded.backupCategories.map(c => c.name),
    date: Date.now(),
    name: `Converted Tachiyomi Backup ${new Date().toDateString()}`,
    version: "0.4.3",
}


