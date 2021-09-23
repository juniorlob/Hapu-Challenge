export interface Payload {
    name: string;
    email: string;
    err?: unknown;
}

export interface Action {
    type: string;
    payload: Payload;
}

export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAIL = 'CREATE_NEWS_FAIL';
