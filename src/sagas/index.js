import { all } from 'redux-saga/effects';

import controlSaga from './control'
import connectSaga from './connect'


export default function* rootSaga() {
    yield all([
        ...controlSaga,
        ...connectSaga
    ])
}