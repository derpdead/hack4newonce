
import {
    PopularArtistsSlider,
    SocialSections,
} from '@Artists/components';
import useArtists from '@Artists/hooks/useArtists';
import { Page } from '@UI/components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    useArtists(1, 10);

    return (
        <Page>
            <PopularArtistsSlider />
            <SocialSections />
        </Page>
    );
};

export default Home;
