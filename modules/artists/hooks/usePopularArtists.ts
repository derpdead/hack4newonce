import useSWRImmutable from 'swr/immutable';

import { getPopularArtists } from '@/modules/artists/service/requests';

export const usePopularArtists = () => {
    const { data: popularArtists = [] } = useSWRImmutable('popular-artists', () => getPopularArtists());

    return popularArtists;
};

export default usePopularArtists;
