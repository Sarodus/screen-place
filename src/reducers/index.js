import { combineReducers } from 'redux'
import controls from './controls'
import connection from './connection'
import search from './search'
import video from './video'

export default combineReducers({
    controls,
    connection,
    search,
    video,
})