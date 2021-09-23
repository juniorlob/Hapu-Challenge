import { all } from 'redux-saga/effects';

import news from './newsletter/sagas';

export default function* rootSaga() {
    yield all([news]);
}
