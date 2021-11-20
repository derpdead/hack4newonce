import {
    Page,
    ToolBar,
} from '@UI/components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Page>
            <ToolBar title={'Baza muzyczna'} />
        </Page>
    );
};

export default Home;
