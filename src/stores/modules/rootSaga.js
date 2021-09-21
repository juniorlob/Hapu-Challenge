import { all } from 'redux-saga/effects';

import examples from './example/sagas';

export default function* rootSaga() {
    yield all([examples]);
}
