
import { PopularArtistsSlider } from '@Artists/components';
import {
    Page,
    ToolBar,
} from '@UI/components';
import type { NextPage } from 'next';

const Home: NextPage = () => {

    return (
        <Page>
            <ToolBar title={'Baza muzyczna'} />
            <PopularArtistsSlider />
        </Page>
    );
};

export default Home;
