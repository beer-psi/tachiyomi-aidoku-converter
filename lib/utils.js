var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Long from "long";
export const TACHIYOMI_TO_AIDOKU_TRACKERS = {
    1: 'myanimelist',
    2: 'anilist',
    // 3: "kitsu",
    // 4: "shikimori",
    // 5: "bangumi",
    // 6: "komga",
    // 7: "mangaupdates"
};
export const AIDOKU_TO_TACHIYOMI_TRACKERS = Object.fromEntries(Object.entries(TACHIYOMI_TO_AIDOKU_TRACKERS).map(([k, v]) => [v, parseInt(k)]));
export function createId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = new Uint8Array(yield crypto.subtle.digest("SHA-1", new TextEncoder().encode(data)));
        return Long.fromBytesBE([...hash.slice(0, 8)]).and(Long.MAX_VALUE);
    });
}
