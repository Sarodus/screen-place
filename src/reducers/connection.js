import {
    PEER_READY,
    PEER_CONNECT,
    PEER_RECEIVE_CONNECTION,
} from '../constants'

const defaultState = {
    id: null,
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
