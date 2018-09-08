import { takeLatest, put } from 'redux-saga/effects'
import {
    PEER_CONNECT,
    PEER_RECEIVE_CONNECTION
} from '../constants'
import peer from '../peer'


function* peerConnect(action) {
    const conn = yield peer.connectTo(action.otherId)
    yield put({
        type: PEER_RECEIVE_CONNECTION,
        conn
    })
}

export default [
    takeLatest(PEER_CONNECT, peerConnect),
]