import { SEARCH_DONE } from '../constants'

const defaultState = {
    provider: null,
    search: ''
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case SEARCH_DONE:
            return {
                ...state,
                provider: action.provider,
                search: action.search
            }
        default:
            return state
    }
}
