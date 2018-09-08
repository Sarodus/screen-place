import { takeEvery, select } from 'redux-saga/effects'
import {
    SEARCH_DONE,
} from '../constants'


function* searchDone(action) {
    const connections = yield select(state => state.connection.connections)
    yield Promise.all(connections.map(conn => (
        conn.send(action)
    )))
}


export default [
    takeEvery(SEARCH_DONE, searchDone),
]
