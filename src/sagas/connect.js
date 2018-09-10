import { takeLatest, put } from 'redux-saga/effects'
import {
    PEER_CONNECT
} from '../constants'
import peer from '../peer'


function* peerConnect(action) {
    yield peer.connectTo(action.otherId)
}

export default [
    takeLatest(PEER_CONNECT, peerConnect),
]