import { IArtistModel } from '@Artists/service/models';

export interface IMostRatedReleaseModel extends IArtistModel {
    artist_name: string;
    rating_average: string;
    release_date: string;
    release_comments_count: number;
}
