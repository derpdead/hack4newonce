import {
    FC,
    useMemo,
} from 'react';

import { IArtistModel } from '@Artists/service/models';
import useMostRatedReleases from '@Releases/hooks/useMostRatedReleases';
import { Avatar } from '@UI/components';

type IArtistMainSectionProps = IArtistModel;

const ArtistMainSection: FC<IArtistMainSectionProps> = ({
    name,
    image,
    slug,
    ...rest
}) => {
    const mostRatedReleases = useMostRatedReleases();
    const rating = useMemo(() => {
        const release = mostRatedReleases.find(release => release.artist_name === name);

        if (!release) {
            return 0;
        }

        return parseFloat(release.rating_average).toFixed(1);
    }, [
        name, mostRatedReleases,
    ]);

    return (
        <div className={'artist-main-section'}>
            <div className={'artist-main-section__header'}>
                <div className={'artist-main-section__avatar'}>
                    <Avatar
                        src={image.avatar.url}
                        width={96}
                        height={96} />
                </div>
                <div className={'artist-main-section__scope'}>
                    <span className={'artist-main-section__scope-title'}>Ocena: </span>
                    <span className={'artist-main-section__scope-value'}>{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default ArtistMainSection;
