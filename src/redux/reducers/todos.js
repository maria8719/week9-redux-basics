import {
    ADD_TODO
  } from '../actions/todos'

  import { RECEIVE_DATA } from '../actions/shared'

    export default function todos (state = [], action) {
        switch(action.type) {
            case ADD_TODO :
            return [
                ...state,
                {
                id: action.id,
                text: action.text,
                completed: false
                }
            ]
            case RECEIVE_DATA :
                return action.todos
            default :
                return state
        }
    }
