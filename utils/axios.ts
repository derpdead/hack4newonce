import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

import { AXIOS_CANCEL_TOKEN_DEFAULT_KEY } from '@/defaults/axios';

const proxy: any = {
    protocol: process.env.NEXT_PUBLIC_PROTOCOL,
    host: process.env.NEXT_PUBLIC_HOST,
};
let baseURL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}`;

if (process.env.NEXT_PUBLIC_PORT) {
    baseURL = `${baseURL}:${process.env.NEXT_PUBLIC_PORT}`;
    proxy.port = +process.env.NEXT_PUBLIC_PORT;
}

const cancelTokens: { [key: string]: [] } = { [AXIOS_CANCEL_TOKEN_DEFAULT_KEY]: [] };

export const clearCancelTokens = (keys: Array<string> = []) => {
    keys.forEach((key) => {
        if (typeof cancelTokens[key] !== 'undefined') {
            cancelTokens[key].forEach((request) => {
                if (request.cancel) {
                    request.cancel();
                }
            });
        }

        cancelTokens[key] = [];
    });
};

export const addCancelTokens = (
    keys: Array<string> = [],
    tokens = [],
) => {
    keys.forEach((key) => {
        if (typeof cancelTokens[key] === 'undefined') {
            cancelTokens[key] = [];
        }

        tokens.forEach((token) => {
            cancelTokens[key].push(token);
        });
    });
};

const instance = axios.create({
    // proxy,
    baseURL,
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
        enabledByDefault: false,
        cacheFlag: 'useCache',
    }),
});

instance.interceptors.request.use(request => {

    if (!request.cancelToken) {
        const cancelToken = axios.CancelToken.source();

        addCancelTokens([AXIOS_CANCEL_TOKEN_DEFAULT_KEY], [cancelToken]);

        request.cancelToken = cancelToken.token;
    }

    return request;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(
    response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });

export default instance;
