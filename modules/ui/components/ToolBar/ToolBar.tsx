import {
    FC,
    ReactNode,
} from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { BLACK } from '@/defaults/colors';

interface IToolBarProps {
    title: string;
    backRoute?: string;
    appendHeader?: ReactNode;
}

const ToolBar: FC<IToolBarProps> = ({
    backRoute,
    title,
    appendHeader,
}) => {
    return (
        <div className={'tool-bar'}>
            {
                backRoute &&
                <Link href={backRoute}>
                    <a className={'tool-bar__back'}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            color={BLACK}
                            size={'1x'} />
                    </a>
                </Link>
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
