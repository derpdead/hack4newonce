import { FC } from 'react';

import classNames from 'classnames';

interface IButtonProps {
    label: string;
    theme?: 'primary' | 'secondary';
}

const Button: FC<IButtonProps> = ({
    label,
    theme = 'primary',
}) => {
    const classes = classNames(
        'button',
        `button--${theme}`,
    );

    return (
        <button className={classes}>
            {label}
        </button>
    );
};

export default Button;
