import Long from "long";

export const TACHIYOMI_TO_AIDOKU_TRACKERS: { [key: number]: string } = {
	1: 'myanimelist',
	2: 'anilist',
	// 3: "kitsu",
	// 4: "shikimori",
	// 5: "bangumi",
	// 6: "komga",
	// 7: "mangaupdates"
};

export const AIDOKU_TO_TACHIYOMI_TRACKERS: { [key: string]: number } = Object.fromEntries(
    Object.entries(TACHIYOMI_TO_AIDOKU_TRACKERS).map(([k, v]) => [v, parseInt(k)])
);

export async function createId(data: string): Promise<Long> {
    const hash = new Uint8Array(await crypto.subtle.digest("SHA-1", new TextEncoder().encode(data)));
    return Long.fromBytesBE([...hash.slice(0, 8)]).and(Long.MAX_VALUE);
}
