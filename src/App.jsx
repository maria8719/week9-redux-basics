import {createStore} from "redux";
import {Provider} from "react-redux";
import  TodoList  from "./containers/TodoList";
import  AddTodoForm  from "./containers/TodoForm";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

export default function App() {

  return (
    <>
      <Provider store={store}>
          <AddTodoForm dispath={addTodo}/>
          <TodoList />
      </Provider>
    </>
  );
}