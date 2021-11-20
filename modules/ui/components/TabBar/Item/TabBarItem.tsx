import { FC } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    BLUE,
    VIOLET_700,
} from '@/defaults/colors';

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
    const router = useRouter();
    const isSelected = (router.pathname.includes(href) && href !== '/') || (router.pathname === href);
    const classes = classNames(
        'tab-bar-item',
        { 'tab-bar-item--selected': isSelected },
    );

    return (
        <Link href={href}>
            <a className={classes}>
                <FontAwesomeIcon
                    icon={icon}
                    color={isSelected ? BLUE : VIOLET_700}
                    size={'1x'} />
                <span className={'tab-bar-item__title'}>
                    {title}
                </span>
            </a>
        </Link>
    );
};

export default TabBarItem;
