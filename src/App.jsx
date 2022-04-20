import {Provider} from "react-redux";
import  TodoList  from "./containers/TodoList";
import  AddTodoForm  from "./containers/TodoForm";
import store from "./redux/store";

export default function App() {

  return (
    <>
      <Provider store={store}>
          <AddTodoForm />
          <TodoList />
      </Provider>
    </>
  );
}