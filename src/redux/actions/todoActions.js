/*
const addTodo = (text) => {
    setTodos([...todos, { id: todos.length, text, completed: false }]);
  };
*/

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

export function handleGetTodos () {
  return (dispatch) => {
    return API.getTodos()
      .then((todos) => {
        dispatch(getTodos(todos))
      })
      .catch(() => alert('There was an error. Try again.'))
  }
}
