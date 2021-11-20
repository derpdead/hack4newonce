import { FC } from 'react';

import Image, { ImageProps } from 'next/image';

type IArtistThumbProps = ImageProps;

const ArtistThumb: FC<IArtistThumbProps> = (props) => {
    return (
        <Image
            className={'artist-thumb'}
            {...props} />
    );
};

export default ArtistThumb;
