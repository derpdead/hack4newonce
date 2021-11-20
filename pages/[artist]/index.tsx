import { FC } from 'react';

import { IArtistModel } from '@Artists/service/models';
import {
    getArtist,
    getPopularArtists,
} from '@Artists/service/requests';
import { Page } from '@UI/components';

interface IArtistProps {
    artist: IArtistModel;
}

const Artist: FC<IArtistProps> = ({ artist }) => {

    return (
        <Page>
            {`Hello ${artist.name}`}
        </Page>
    );
};

export const getStaticPaths = async () => {
    const artists = await getPopularArtists();

    return {
        paths: artists.map(artist => ({ params: { artist: artist.slug } })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const artist = await getArtist(context.params.artist);

    return { props: { artist } };
};

export default Artist;
