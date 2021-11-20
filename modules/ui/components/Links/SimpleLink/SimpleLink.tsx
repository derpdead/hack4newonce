import { FC } from 'react';

import Link, { LinkProps } from 'next/link';

interface ISimpleLinkProps extends LinkProps {
    label: string;
}

const SimpleLink: FC<ISimpleLinkProps> = ({
    label, ...props
}) => {

    return (
        <Link {...props}>
            <a className={'simple-link'}>
                {label}
            </a>
        </Link>
    );
};

export default SimpleLink;
