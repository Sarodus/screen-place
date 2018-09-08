import { combineReducers } from 'redux'
import controls from './controls'
import connection from './connection'
import search from './search'

export default combineReducers({
    controls,
    connection,
    search,
})