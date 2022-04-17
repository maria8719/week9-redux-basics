import  CounterRedux from "./Components/Counter";
import {createStore} from "redux";
import {Provider} from "react-redux";

import reducer from "./redux/reducer";
import "./App.css";

const store = createStore(reducer);

function App() {

  return (
    <>
       <Provider store = {store}>
          <CounterRedux />
      </Provider>
    </>
  );
}

export default App;

