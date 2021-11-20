import useSWRImmutable from 'swr/immutable';

import { getArtists } from '@/modules/artists/service/requests';

export const useArtists = (page: number, perPage: number) => {
    const { data: artists = [] } = useSWRImmutable(`artists[${page}/${perPage}]`, () => getArtists(page, perPage));

    return artists;
};

export default useArtists;
