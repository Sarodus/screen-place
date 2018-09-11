import Peer from 'peerjs'
import store from './store'
import globalEvent from './globalEvent'
import {
    peerReady,
    peerReceive,
    streamReceive,
    searchDone,
    sendSync,
    videoStatus,
} from './actions'
import {
    SEARCH_DONE,
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
    PEER_REQUEST_SYNC,
    VIDEO_STATUS,
} from './constants'


let peer = new Peer()

peer.connectTo = otherId => {
    return new Promise((resolve, reject) => {
        try {
            console.log('Connect to', otherId)
            const conn = peer.connect(otherId)
            conn.on('error', reject)
            conn.on('close', reject)
            conn.on('data', processData)
            conn.on('open', () =>  resolve(conn))
            setTimeout(() => reject('Timeout'), 5000)
        } catch (error) {
            reject(error)
        }
    })
}

peer.on('open', id => {
    store.dispatch(peerReady(id))
})

// peer.call(peerId, stream)

const processData = action => {
    console.log('processData', action)
    switch(action.type) {
        case SEARCH_DONE:
            return store.dispatch(searchDone(action.provider, action.search))
        case VIDEO_STATUS:
            return store.dispatch(videoStatus(action))
        case CONTROL_SEND_PLAY:
            return globalEvent(CONTROL_SEND_PLAY)
        case CONTROL_SEND_PAUSE:
            return globalEvent(CONTROL_SEND_PAUSE)
        case CONTROL_SEND_JUMP:
            return globalEvent(CONTROL_SEND_JUMP, {time: action.time})
        default:
            console.log('Unknown action', action)
            break
    }
}

const processGuestRequest = action => {
    console.log('processGuestRequest', action)
    switch(action.type) {
        case PEER_REQUEST_SYNC:
            return store.dispatch(sendSync(action.peerId))
        default:
            console.log('Unknown action', action)
            break
    }
}

peer.on('connection', conn => {
    console.log('Connection received!', conn)
    store.dispatch(peerReceive(conn))
    conn.on('data', processGuestRequest)
})

peer.on('call', call => {
    console.log('GETTING CALL!', call)
    call.on('stream', otherStream => {
        store.dispatch(streamReceive(otherStream))
    })
})

export default peer