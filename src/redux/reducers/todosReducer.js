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

    const todoList;

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
            /*
            todoList = state.todos.map(todo => {

                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }
            */
        }
        case types.DELETE_TODO: {
         
            /*
            todoList = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: todoList
            };
            */

        }     
    }   
  }