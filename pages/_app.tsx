import '../styles/globals.css';
import '@UI/components/index.scss';
import '@Artists/components/index.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { DefaultLayout } from '@UI/components';
import type { AppProps } from 'next/app';

import 'swiper/css';

config.autoAddCss = false;

function MyApp({
    Component, pageProps,
}: AppProps) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
}

export default MyApp;
