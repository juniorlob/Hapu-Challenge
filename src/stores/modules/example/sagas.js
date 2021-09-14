// import { call, put, all, takeLatest } from 'redux-saga/effects';
import { put, all, takeLatest } from 'redux-saga/effects'

// import { publicRequest } from 'services/api';

import {
    EXAMPLE_TYPE_REQUEST,
    EXAMPLE_TYPE_SUCCESS,
    EXAMPLE_TYPE_FAIL,
} from './types'

function* fetchExample({ id }) {
    try {
        const url = id ? `endpoint/${id}` : `endpoint`

        // const {
        // 	data: { data },
        // } = yield call(publicRequest.get, url);
        // const payload = id ? { example: data } : { examples: data };
        const payload = { example: url }
        yield put({ type: EXAMPLE_TYPE_SUCCESS, payload })
    } catch (error) {
        const payload = {
            err: {
                statusCode: error.code,
                message: error.message,
            },
        }
        yield put({ type: EXAMPLE_TYPE_FAIL, payload })
    }
}

export default all([takeLatest(EXAMPLE_TYPE_REQUEST, fetchExample)])
