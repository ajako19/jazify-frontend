export default interface Song {
    id: number;
    title: string;
    link: string;
    explicit_lyrics: boolean;
    release_date: number;
    preview: string;
    album: Album;
}

export interface Album {
    id: number;
    title: string;
    link: string;
    cover_big: string;
}

