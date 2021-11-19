import { FC } from 'react';

import { TabBar } from '@UI/components';

const DefaultLayout: FC = ({ children }) => {

    return (
        <div className={'default-layout'}>
            {children}
            <TabBar />
        </div>
    );
};

export default DefaultLayout;
