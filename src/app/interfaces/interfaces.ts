//se ejecuto despues de revisar api en consola

export interface RespuestaToHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id?: string;
    name: string;
}