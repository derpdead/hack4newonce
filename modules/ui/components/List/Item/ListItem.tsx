import { FC } from 'react';

const ListItem: FC = () => {

    return (
        <li className={'list-item list-item--selected'}>
            <div className={'list-item__container'}>
                <span className={'list-item__title'} />
            </div>
        </li>
    );
};

export default ListItem;
