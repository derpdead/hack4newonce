import { FC } from 'react';

import { ArtistMainSection } from '@Artists/components';
import { IArtistModel } from '@Artists/service/models';
import {
    getArtist,
    getPopularArtists,
} from '@Artists/service/requests';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMostRatedReleases from '@Releases/hooks/useMostRatedReleases';
import {
    Page,
    ToolBar,
} from '@UI/components';
import { useRouter } from 'next/router';

import { BLUE } from '@/defaults/colors';

interface IArtistProps {
    artist: IArtistModel;
}

const Artist: FC<IArtistProps> = ({ artist }) => {
    useMostRatedReleases();

    const router = useRouter();

    if (router.isFallback) {
        return <Page>I am loading...</Page>;
    }

    return (
        <Page>
            <ToolBar
                title={artist.name}
                backRoute={'/'}
                appendHeader={
                    <FontAwesomeIcon
                        icon={faHeart}
                        color={BLUE}
                        size={'1x'} />
                } />
            <ArtistMainSection {...artist} />
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
