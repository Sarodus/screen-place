import { SEARCH_DONE, VIDEO_STATUS } from '../constants'

const defaultState = {
    provider: null,
    search: '',
    time: 0
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case SEARCH_DONE:
            return {
                ...state,
                provider: action.provider,
                search: action.search
            }
        case VIDEO_STATUS:
            const { type, ...status } = action
            return {
                ...state,
                ...status
            }
        default:
            return state
    }
}
