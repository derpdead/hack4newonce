import {
    FC,
    useMemo,
} from 'react';

import { IArtistModel } from '@Artists/service/models';
import useMostRatedReleases from '@Releases/hooks/useMostRatedReleases';
import {
    Avatar,
    Section,
} from '@UI/components';
import Link from 'next/link';

type IArtistMainSectionProps = IArtistModel;

const ArtistMainSection: FC<IArtistMainSectionProps> = ({
    name,
    image,
    slug,
    members = [],
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

    console.log(members);

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
            {
                members.length > 0 &&
                <Section
                    title={'Członkowie'}
                    body={
                        <div className={'artist-main-section__members'}>
                            {
                                members.map(member =>
                                    <Link href={member.slug}>
                                        <a className={'artist-main-section__member'}>
                                            <div className={'artist-main-section__avatar'}>
                                                <Avatar
                                                    src={member.image.avatar.url}
                                                    width={62}
                                                    height={62} />
                                            </div>
                                            <span className={'artist-main-section__member-name'}>{member.name}</span>
                                        </a>
                                    </Link>,
                                )
                            }
                        </div>
                    } />
            }
            <Section title={'Najlepsze wydawnictwa'} />
        </div>
    );
};

export default ArtistMainSection;
