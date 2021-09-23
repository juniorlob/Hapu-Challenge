import { all } from 'redux-saga/effects';

import news from './newspaper/sagas';

export default function* rootSaga() {
    yield all([news]);
}
