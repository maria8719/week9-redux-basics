import  TodoList  from "./containers/TodoList";
import  AddTodoForm  from "./containers/TodoForm";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {

  return (
    <>
      <Provider store={store}>
          <AddTodoForm />
          <TodoList />
      </Provider>
    </>
  );
}

export default App;