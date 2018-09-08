import Peer from 'peerjs'
import { peerReady, streamReceive } from './actions'
import store from './store'
import globalEvent from './globalEvent'
import {
    SEARCH_DONE,
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
} from './constants'


let peer = new Peer()

peer.connectTo = otherId => {
    return new Promise((resolve, reject) => {
        try {
            const conn = peer.connect(otherId)
            conn.on('open', () => {
                conn.send('Hi!!!')
                return resolve(conn)
            })
        } catch (error) {
            return reject()
        }
    })
}

peer.on('open', id => {
    store.dispatch(peerReady(id))
})

// peer.call(peerId, stream)

const processData = action => {
    switch(action.type) {
        case SEARCH_DONE:
            return globalEvent(SEARCH_DONE, {provider: action.provider, search: action.search})
        case CONTROL_SEND_PLAY:
            return globalEvent(CONTROL_SEND_PLAY)
        case CONTROL_SEND_PAUSE:
            console.log('event pause sent!')
            return globalEvent(CONTROL_SEND_PAUSE)
        case CONTROL_SEND_JUMP:
            return globalEvent(CONTROL_SEND_JUMP, {time: action.time})
        default:
            console.log('Unknown action', action)
            break
    }
}

peer.on('connection', conn => {
    conn.on('data', processData)
})

peer.on('call', call => {
    console.log('GETTING CALL!', call)
    call.on('stream', otherStream => {
        store.dispatch(streamReceive(otherStream))
    })
})

export default peer