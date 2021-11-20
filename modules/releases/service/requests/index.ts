import { MOST_RATED_RELEASES_URL } from '@Releases/service/defaults';
import { IMostRatedReleaseModel } from '@Releases/service/models';

import axios from '@/utils/axios';

export const getMostRatedReleases = async (): Promise<Array<IMostRatedReleaseModel>> => {
    const { data } = await axios.get(MOST_RATED_RELEASES_URL);

    return data;
};
