import { FC } from 'react';

const Fab: FC = ({ children }) => {

    return (
        <button className={'fab'}>
            {children}
        </button>
    );
};

export default Fab;
