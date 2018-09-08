import {
    SEARCH_DONE,
    STREAM_RECEIVE,
    STREAM_SEND,
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
    PEER_READY,
    PEER_CONNECT,
    PEER_RECEIVE_CONNECTION,
} from './constants'

export const searchDone = (provider, search) => ({
    type: SEARCH_DONE,
    provider,
    search
})

export const streamReceive = stream => ({
    type: STREAM_RECEIVE,
    stream
})

export const streamSend = stream => ({
    type: STREAM_SEND,
    stream
})

export const controlSendPlay = () => ({
    type: CONTROL_SEND_PLAY
})

export const controlSendPause = () => ({
    type: CONTROL_SEND_PAUSE
})

export const controlSendJump = time => ({
    type: CONTROL_SEND_JUMP,
    time
})

export const peerReady = id => ({
    type: PEER_READY,
    id
})

export const peerReceive = conn => ({
    type: PEER_RECEIVE_CONNECTION,
    conn
})

export const peerConnect = otherId => ({
    type: PEER_CONNECT,
    otherId
})