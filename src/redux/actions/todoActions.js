/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */


/*
const addTodo = (text) => {
    setTodos([...todos, { id: todos.length, text, completed: false }]);
  };
*/

// import actionType constants
import * as types from '../constants/actionTypes'

export const addTodo = (text) => ({

  type: types.ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => ({

  type: types.TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({

  type: types.DELETE_TODO,
  payload: id,
});