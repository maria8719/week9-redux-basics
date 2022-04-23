import * as types from '../constants/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        {
            id: uuidv4(),
            text: 'Use Redux',
            completed: true
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
          const items = state.todos.map(item => {
            if (item.id === action.payload) {
              const newItem = { ...item };
              newItem.completed = !newItem.completed;
              return newItem;
            }
    
            return item;
          });
    
          return { ...state, todos: items };          
                 
          
    }
        case types.DELETE_TODO: {
         
          // ...
         let updatedTodos = state.todos.filter(
            (todo) => todo.id !== action.payload);
          return { ...state, todos: updatedTodos };
         
        }   
        default: {
            return state;
        }
    }   

  }

export default todosReducer;