import { FC } from 'react';

import Image, { ImageProps } from 'next/image';

type IFabImageProps = ImageProps;

const FabImage: FC<IFabImageProps> = ({ ...rest }) => {
    return (
        <div className={'fab-image'}>
            <Image {...rest} />;
        </div>
    );
};

export default FabImage;
