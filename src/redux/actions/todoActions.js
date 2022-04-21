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