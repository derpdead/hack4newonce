import { FC } from 'react';

const Podcasts: FC = ({ children }) => {

    return (
        <div className={'podcasts'}>
            {children}
        </div>
    );
};

export default Podcasts;
