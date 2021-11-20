import { FC } from 'react';

import {
    FriendsActivitySlider,
    ObserversActivitySlider,
} from '@Artists/components';
import {
    Section,
    SimpleLink,
} from '@UI/components';

const SocialSections: FC = () => {

    return (
        <div className={'social-sections'}>
            <Section
                title={'Aktywność znajomych'}
                appendHeader={
                    <SimpleLink
                        label={'Zobacz wszystko'}
                        href={'/test-href'} />
                }
                body={<FriendsActivitySlider />} />
            <Section
                title={'Obserwowani newonce'}
                appendHeader={
                    <SimpleLink
                        label={'Zobacz wszystko'}
                        href={'/test-href'} />
                }
                body={<ObserversActivitySlider />} />
            <Section
                title={'Polubieni artyści'}
                appendHeader={
                    <SimpleLink
                        label={'Zobacz wszystko'}
                        href={'/test-href'} />
                } />
        </div>
    );
};

export default SocialSections;
