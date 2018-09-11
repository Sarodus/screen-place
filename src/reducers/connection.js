import {
    PEER_READY,
    PEER_CONNECT,
    PEER_RECEIVE_CONNECTION,
    PEER_CONNECTED,
} from '../constants'

const defaultState = {
    id: null,
    otherId: null,
    hostConn: null,
    connections: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case PEER_READY:
            return {
                ...state,
                id: action.id
            }
        case PEER_CONNECT:
            return {
                ...state,
                otherId: action.otherId
            }
        case PEER_CONNECTED:
            return {
                ...state,
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
