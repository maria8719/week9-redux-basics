export const ADD_TODO = 'ADD_TODO'

function addTodo (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
}

export function handleAddTodo (name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        cb()
      })
      .catch(() => alert('There was an error. Try again.'))
  }
}