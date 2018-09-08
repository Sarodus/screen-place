import { all } from 'redux-saga/effects';

import controlSaga from './control'
import connectSaga from './connect'
import searchSaga from './search'


export default function* rootSaga() {
    yield all([
        ...controlSaga,
        ...connectSaga,
        ...searchSaga,
    ])
}