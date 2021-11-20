import { FC } from 'react';

import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';

type IAvatarProps = ImageProps;

const Avatar: FC<IAvatarProps> = ({
    src, ...rest
}) => {
    const classes = classNames(
        'avatar',
        { 'avatar--placeholder': !src },
    );

    if (!src) {
        return (
            <div className={classes} />
        );
    }

    return (
        <Image
            className={classes}
            src={src}
            {...rest} />
    );
};

export default Avatar;
