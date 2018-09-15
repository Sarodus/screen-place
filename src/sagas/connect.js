import { takeLatest, takeEvery, select, put } from 'redux-saga/effects'
import peer from '../peer'
import {
    PEER_CONNECT,
    PEER_CONNECT_FAIL,
    PEER_RECEIVE_CONNECTION,
    PEER_REQUEST_SYNC,
    PEER_SEND_SYNC,
    SEARCH_DONE,
    PEER_CONNECTED,
    VIDEO_STATUS,
} from '../constants'

function* peerConnect(action) {
    try {
        const hostConn = yield peer.connectTo(action.otherId)
        yield put({
            type: PEER_CONNECTED,
            hostConn
        })
        yield put({
            type: PEER_REQUEST_SYNC,
            peerId: peer.id
        })
    } catch (error) {
        console.log({error})
        yield put({
            type: PEER_CONNECT_FAIL
        })
    }
}

function* initOther(action) {
    console.log('initOther', action.conn)
    const search = yield select(state => state.search)
    yield put({
        type: SEARCH_DONE,
        ...search
    })
}

function* requestSync(action) {
    const hostConn = yield select(state => state.connection.hostConn)
    yield hostConn.send({
        type: PEER_REQUEST_SYNC,
        peerId: action.peerId
    })
}

function* sendSync(action) {
    const connections = yield select(state => state.connection.connections)
    const peerConn = connections.find(conn => conn.peer === action.peerId)
    if(peerConn) {
        const videoStatus = yield select(state => state.video)
        yield peerConn.send({
            type: VIDEO_STATUS,
            ...videoStatus
        })
    }
}

export default [
    takeLatest(PEER_CONNECT, peerConnect),
    takeLatest(PEER_REQUEST_SYNC, requestSync),
    takeEvery(PEER_RECEIVE_CONNECTION, initOther),
    takeEvery(PEER_SEND_SYNC, sendSync),
]