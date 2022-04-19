import { useState } from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import  TodoList  from "./components/TodoList";
import  AddTodoForm  from "./components/AddTodoForm";
import reducer from "./redux/reducers";

const store = createStore(reducer);

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length, text, completed: false }]);
  };

  return (
    <>
      <Provider store={store}>
          <AddTodoForm dispath={addTodo}/>
          <TodoList />
      </Provider>
    </>
  );
}