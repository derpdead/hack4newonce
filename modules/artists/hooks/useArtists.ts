import useSWRImmutable from 'swr/immutable';

import { getArtists } from '@/modules/artists/service/requests';

export const useArtists = (page: number, perPage: number) => {
    const { data } = useSWRImmutable(`artists[${page}/${perPage}]`, () => getArtists(page, perPage));

    return data && data.items || [];
};

export default useArtists;
