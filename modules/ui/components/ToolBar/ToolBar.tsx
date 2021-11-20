import {
    FC,
    ReactNode,
} from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

import { BLACK } from '@/defaults/colors';

interface IToolBarProps {
    title: string;
    backRoute?: boolean;
    appendHeader?: ReactNode;
}

const ToolBar: FC<IToolBarProps> = ({
    backRoute,
    title,
    appendHeader,
}) => {
    const router = useRouter();

    const onClick = () => {
        router.back();
    };

    return (
        <div className={'tool-bar'}>
            {
                backRoute &&
                <button
                    className={'tool-bar__back'}
                    onClick={onClick}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        color={BLACK}
                        size={'1x'} />
                </button>
            }
            <div className={'tool-bar__header'}>
                <span className={'tool-bar__title'}>{title}</span>
                {
                    appendHeader &&
                    appendHeader
                }
            </div>
        </div>
    );
};

export default ToolBar;
