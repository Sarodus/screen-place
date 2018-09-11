import { takeEvery, select } from 'redux-saga/effects'
import {
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
    SEARCH_DONE,
} from '../constants'


function* sendAction(action) {
    const connections = yield select(state => state.connection.connections)
    yield Promise.all(connections.map(conn => (
        conn.send(action)
    )))
}


export default [
    takeEvery(CONTROL_SEND_PLAY, sendAction),
    takeEvery(CONTROL_SEND_PAUSE, sendAction),
    takeEvery(CONTROL_SEND_JUMP, sendAction),
    takeEvery(SEARCH_DONE, sendAction),
]