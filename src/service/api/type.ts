export type IResponseApi = {
    title: string
    description: string
    image: string
    copyright: string
    items:  {
        title: string;
        description: string;
        duration: string;
        pubDate: string;
        enclosure: string;
        image: string
    }[]
}