import {
    CONTROL_SEND_PLAY,
    CONTROL_SEND_PAUSE,
    CONTROL_SEND_JUMP,
} from '../constants'

const defaultState = {}

export default (state=defaultState, action) => {
    switch(action.type) {
        case CONTROL_SEND_PLAY:
            return {
                ...state
            }
        case CONTROL_SEND_PAUSE:
            return {
                ...state
            }
        case CONTROL_SEND_JUMP:
            return {
                ...state
            }
        default:
            return state
    }
}
