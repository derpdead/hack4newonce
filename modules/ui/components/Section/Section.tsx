import {
    FC,
    ReactNode,
} from 'react';

interface ISectionProps {
    title: string;
    appendHeader?: ReactNode;
    body?: ReactNode;
}

const Section: FC<ISectionProps> = ({
    title,
    appendHeader,
    body,
}) => {

    return (
        <section className={'section'}>
            <div className={'section__header'}>
                <span className={'section__title'}>
                    {title}
                </span>
                {
                    appendHeader &&
                    appendHeader
                }
            </div>
            {
                body &&
                <div className={'section__body'}>
                    {body}
                </div>
            }
        </section>
    );
};

export default Section;
