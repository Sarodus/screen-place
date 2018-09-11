import { takeLatest } from 'redux-saga/effects'
import { PEER_CONNECT } from '../constants'
import peer from '../peer'

function* peerConnect(action) {
    try {
        const conn = yield peer.connectTo(action.otherId)
        console.log({conn})
        yield conn
    } catch (error) {
        console.log(error)
    }
}

export default [
    takeLatest(PEER_CONNECT, peerConnect),
]