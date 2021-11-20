
import { PopularArtistsSlider } from '@Artists/components';
import { Page } from '@UI/components';
import type { NextPage } from 'next';

const Home: NextPage = () => {

    return (
        <Page>
            <PopularArtistsSlider />
        </Page>
    );
};

export default Home;
