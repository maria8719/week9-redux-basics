import  CounterRedux from "./Counter";
import {createStore} from "redux";
import {Provider} from "react-redux";

import reducer from "./reducer";
import "./App.css";

/**
 * 
 *  
 * 
 */
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

