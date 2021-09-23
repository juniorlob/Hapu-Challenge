import { call, put, all, takeLatest } from 'redux-saga/effects';

import { publicRequest } from '../../../services/api';

import {
    CREATE_NEWS_REQUEST,
    CREATE_NEWS_SUCCESS,
    CREATE_NEWS_FAIL,
    Action,
} from './types';

function* createNews(data: Action): any {
    try {
        const currentNews = yield call(
            publicRequest.post,
            'challenge-newsletter/',
            data.payload
        );
        const payload = { currentNews };
        yield put({ type: CREATE_NEWS_SUCCESS, payload });
    } catch (error: any) {
        const payload = {
            err: {
                statusCode: error.code,
                message: error.response.data,
            },
        };
        yield put({ type: CREATE_NEWS_FAIL, payload });
    }
}

export default all([takeLatest(CREATE_NEWS_REQUEST, createNews)]);
