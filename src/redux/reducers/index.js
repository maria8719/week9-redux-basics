import { combineReducers } from 'redux'
import todosReducer from './todosReducer'

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  todos: todosReducer,
});

export default reducers;