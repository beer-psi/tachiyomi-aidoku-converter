import Long from "long";
export declare const TACHIYOMI_TO_AIDOKU_TRACKERS: {
    [key: number]: string;
};
export declare const AIDOKU_TO_TACHIYOMI_TRACKERS: {
    [key: string]: number;
};
export declare function createId(data: string): Promise<Long>;
