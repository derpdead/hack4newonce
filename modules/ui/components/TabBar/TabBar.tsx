import { FC } from 'react';

import {
    faCompactDisc,
    faCrown,
    faHamburger,
    faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
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
