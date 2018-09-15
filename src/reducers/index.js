import { combineReducers } from 'redux'
import controls from './controls'
import connection from './connection'
import video from './video'

export default combineReducers({
    controls,
    connection,
    video,
})