import { FC } from 'react';

import {
    faBroadcastTower,
    faCompactDisc,
    faCrown,
    faMicrophone,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import TabBarItem from '@UI/components/TabBar/Item/TabBarItem';

const TabBar: FC = () => {

    return (
        <nav className={'tab-bar'}>
            <TabBarItem
                icon={faNewspaper}
                title={'Feed'}
                href={'/feed'} />
            <TabBarItem
                icon={faBroadcastTower}
                title={'Radio'}
                href={'/radio'} />
            <TabBarItem
                icon={faMicrophone}
                title={'Podcasty'}
                href={'/podcasts'} />
            <TabBarItem
                icon={faCompactDisc}
                title={'Baza muzyczna'}
                href={'/'} />
            <TabBarItem
                icon={faCrown}
                title={'Klub'}
                href={'/club'} />
        </nav>
    );
};

export default TabBar;
