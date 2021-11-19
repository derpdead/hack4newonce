import { FC } from 'react';

import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import TabBarItem from '@UI/components/TabBar/Item/TabBarItem';

const TabBar: FC = () => {

    return (
        <nav className={'tab-bar'}>
            <TabBarItem
                icon={faHamburger}
                title={'Feed'}
                href={'/feed'} />
            <TabBarItem
                icon={faHamburger}
                title={'Radio'}
                href={'/radio'} />
            <TabBarItem
                icon={faHamburger}
                title={'Podcasty'}
                href={'/podcasts'} />
            <TabBarItem
                icon={faHamburger}
                title={'Baza muzyczna'}
                href={'/music-base'} />
            <TabBarItem
                icon={faHamburger}
                title={'Klub'}
                href={'/club'} />
        </nav>
    );
};

export default TabBar;
