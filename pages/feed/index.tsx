import { FC } from 'react';

import { Page } from '@UI/components';

const Feed: FC = ({ children }) => {

    return (
        <Page>
            {children}
        </Page>
    );
};

export default Feed;
