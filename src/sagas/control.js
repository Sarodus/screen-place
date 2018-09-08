import { takeEvery, select } from 'redux-saga/effects'
import {
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
} from '../constants'


function* sendPlay(action) {
    const connections = yield select(state => state.connection.connections)
    yield Promise.all(connections.map(conn => {
        conn.send(action)
    }))
}

function* sendPause(action) {
    console.log('Send pause action!!', action)
    const connections = yield select(state => state.connection.connections)
    yield Promise.all(connections.map(conn => {
        conn.send(action)
    }))
}

function* sendJump(action) {
    const connections = yield select(state => state.connection.connections)
    yield Promise.all(connections.map(conn => {
        conn.send(action)
    }))
}


export default [
    takeEvery(CONTROL_SEND_PLAY, sendPlay),
    takeEvery(CONTROL_SEND_PAUSE, sendPause),
    takeEvery(CONTROL_SEND_JUMP, sendJump),
]
