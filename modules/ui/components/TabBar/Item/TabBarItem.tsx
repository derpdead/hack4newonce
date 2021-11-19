import { FC } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DARK_VIOLET } from '@/defaults/colors';

interface ITabBarItemProps {
    icon: IconProp;
    title: string;
    href: string;
}

const TabBarItem: FC<ITabBarItemProps> = ({
    icon,
    title,
    href,
}) => {

    return (
        <button className={'tab-bar-item'}>
            <FontAwesomeIcon
                icon={icon}
                color={DARK_VIOLET}
                size={'1x'} />
            <span className={'tab-bar-item__title'}>
                {title}
            </span>
        </button>
    );
};

export default TabBarItem;
