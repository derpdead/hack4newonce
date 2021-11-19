import { FC } from 'react';

const Feed: FC = ({ children }) => {

    return (
        <div className={'feed'}>
            {children}
        </div>
    );
};

export default Feed;
