import { combineReducers } from 'redux'
import todos from './todos'
import loading from './loading'

/*
 *
 *
 * 
 * 
 *  
 *  
 *  */


export default combineReducers({
    loading,
    todos
})