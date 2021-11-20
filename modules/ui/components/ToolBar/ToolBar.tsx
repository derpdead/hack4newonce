import { FC } from 'react';

interface IToolBarProps {
    title: string;
}

const ToolBar: FC<IToolBarProps> = ({ title }) => {
    return (
        <div className={'tool-bar'}>
            <span className={'tool-bar__title'}>{title}</span>
        </div>
    );
};

export default ToolBar;
