import { FC } from 'react';

import { Avatar } from '@UI/components';

export interface IActivitySliderItemModel {
    descriptionTitle: string;
    description: string;
    user: string;
    avatar?: string;
    link: {
        label: string;
        href: string;
    };
}

type IActivitySliderItemProps = IActivitySliderItemModel;

const ActivitySliderItem: FC<IActivitySliderItemProps> = ({
    avatar,
    user,
}) => {

    return (
        <div className={'activity-slider-item'}>
            <div className={'activity-slider-item__header'}>
                <Avatar
                    src={avatar}
                    width={42}
                    height={42}
                    objectFit={'contain'} />
                <span className={'activity-slider-item__title'}>
                    {user}
                </span>
            </div>
            <div className={'activity-slider-item__description'}>
                Aktualnie słucha: Black Illuminati (feat. Jadakiss) - Fr...
            </div>
            <div className={'activity-slider-item__link'}>
                Przejdź do utworu
            </div>
        </div>
    );
};

export default ActivitySliderItem;
