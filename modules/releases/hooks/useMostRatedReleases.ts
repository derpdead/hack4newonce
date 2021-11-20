import { getMostRatedReleases } from '@Releases/service/requests';
import useSWRImmutable from 'swr/immutable';

export const useMostRatedReleases = () => {
    const { data: mostRatedReleases = [] } = useSWRImmutable('most-rated-releases', () => getMostRatedReleases());

    return mostRatedReleases;
};

export default useMostRatedReleases;
