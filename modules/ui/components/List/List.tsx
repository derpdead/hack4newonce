import { FC } from 'react';

import { ListItem } from '@UI/components';

interface IListProps {
    title: string;
    items: Array<any>;
}

const List: FC<IListProps> = ({
    title,
    items,
}) => {

    return (
        <div className={'list'}>
            <span>{title}</span>
            <ul className={'list__items'}>
                {
                    items.map((item, index) =>
                        <ListItem key={index} />,
                    )
                }
            </ul>
        </div>
    );
};

export default List;
