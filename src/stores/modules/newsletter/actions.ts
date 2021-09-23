import { CREATE_NEWS_REQUEST, Payload, Action } from './types';

export const createNewsRequest = ({ name, email }: Payload): Action => ({
    type: CREATE_NEWS_REQUEST,
    payload: { name, email },
});
