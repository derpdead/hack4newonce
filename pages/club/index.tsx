import { FC } from 'react';

const Club: FC = ({ children }) => {

    return (
        <div className={'club'}>
            {children}
        </div>
    );
};

export default Club;
