import {
    PEER_READY,
    PEER_CONNECT,
    PEER_CONNECT_FAIL,
    PEER_RECEIVE_CONNECTION,
    PEER_CONNECTED,
} from '../constants'

const defaultState = {
    id: null,
    ready: false,
    otherId: null,
    hostConn: null,
    connecting: false,
    connected: false,
    fail: false,
    connections: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case PEER_READY:
            return {
                ...state,
                id: action.id,
                ready: true
            }
        case PEER_CONNECT:
            return {
                ...state,
                connecting: true,
                connected: false,
                fail: false,
                otherId: action.otherId
            }
        case PEER_CONNECT_FAIL:
            return {
                ...state,
                connecting: false,
                fail: true
            }
            case PEER_CONNECTED:
            return {
                ...state,
                connecting: false,
                connected: true,
                hostConn: action.hostConn
            }
        case PEER_RECEIVE_CONNECTION:
            return {
                ...state,
                connections: state.connections.concat(action.conn)
            }
        default:
            return state
    }
}
