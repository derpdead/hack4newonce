import {
    ARTISTS_URL,
    POPULAR_ARTISTS_URL,
} from '@/modules/artists/service/defaults';
import { IArtistModel } from '@/modules/artists/service/models';
import axios from '@/utils/axios';

export const getArtist = async (slug: string): Promise<IArtistModel> => {
    const { data } = await axios.get(`${ARTISTS_URL}/${slug}`);

    return data;
};

export const getArtists = async (page: number, perPage: number): Promise<Array<IArtistModel>> => {
    const { data } = await axios.get(ARTISTS_URL, { params: {
        page,
        perPage,
    } });

    return data;
};

export const getPopularArtists = async (): Promise<Array<IArtistModel>> => {
    const { data } = await axios.get(POPULAR_ARTISTS_URL);

    return data;
};
