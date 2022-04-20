import * as types from '../constants/actionTypes';

const initialState = {
    todos: [
        {
            id: todos.length,
            text: 'Use Redux',
            completed: false
        }
    ],
}

 const todosReducer = (state = initialState, action) =>{

    const todoList = [];

    switch(action.type) {
        case types.ADD_TODO: {
            todoList = [...state.todos, {
                id: state.todos.length,
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