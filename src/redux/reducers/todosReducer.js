import * as types from '../constants/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        {
            id: uuidv4(),
            text: 'Use Redux',
            completed: false
        }
    ],
}

 const todosReducer = (state = initialState, action) =>{

    let todoList = [];

    switch(action.type) {
        case types.ADD_TODO: {
            todoList = [...state.todos, {
                id:  uuidv4(),
                text: action.payload,
                completed: false
            }];
            return {
                ...state,
                todos: todoList
            };
        }   
        case types.TOGGLE_TODO: {
          // ...
        
        }
        case types.DELETE_TODO: {
         
          // ...
         
        }    
        default: {
            return state;
        }
    }   

  }

export default todosReducer;