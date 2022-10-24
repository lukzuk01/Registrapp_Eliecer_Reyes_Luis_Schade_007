export interface RespuestaToHeadLines {
    count: number;
    next: string;
    previous: string;
    results: Results[];
}

export interface Results {
    id?: number;
    name: string;
    slug: string;
    games_count: number;
    image_background?: string;
    image: string;
    year_start: string;
    year_end: string;
    games: Games[];

}

export interface Games {
    id?: number;
    slug: string;
    name: string;
    added: number;
}