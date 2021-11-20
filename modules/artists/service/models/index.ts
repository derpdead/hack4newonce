export interface IArtistModel {
    id: number;
    name: string;
    slug: string;
    image: {
        url: string | null;
        avatar: {
            url: string | null;
        };
        facebook: {
            url: string | null;
        };
        twitter: {
            url: string | null;
        };
    };
}
