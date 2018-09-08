import { combineReducers } from 'redux'
import controls from './controls'
import connection from './connection'

export default combineReducers({
    controls,
    connection,
})