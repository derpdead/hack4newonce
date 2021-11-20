import { FC } from 'react';

import { ActivitySlider } from '@Artists/components';
import useArtists from '@Artists/hooks/useArtists';

const FriendsActivitySlider: FC = () => {
    const artists = useArtists(1, 10);

    const items = artists.map(artist => ({
        avatar: artist.image.avatar.url,
        user: `@${artist.name}`,
    }));

    return (
        <ActivitySlider items={items} />
    );
};

export default FriendsActivitySlider;
