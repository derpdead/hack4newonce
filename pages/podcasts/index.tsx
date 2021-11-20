import { FC } from 'react';

import { Page } from '@UI/components';

const Podcasts: FC = ({ children }) => {

    return (
        <Page>
            {children}
        </Page>
    );
};

export default Podcasts;
