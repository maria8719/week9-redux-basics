# State Management

State management in web applications has become a popular topic. Since single page applications (SPAs) are only delivered once from a web server yet stay interactive on the client they have to establish state management on the client. 

They have to keep the state consistent in the frontend application without making any more requests to the backend application. They have to give the user an effortless and pleasant experience when using the application.

In React, data flows unidirectionally. This means that we can only pass data from a parent to a child component. This can become a hassle and pretty complex (aka <a href="https://kentcdodds.com/blog/prop-drilling">prop-drilling</a>) when we start dealing with very large scaled applications.

![Without Redux](images/without_redux.png)

The Facebook development created the <a href="https://www.youtube.com/watch?v=pR4A9YONzuo">Flux architecture pattern</a> back in <a href="https://www.youtube.com/watch?v=nYkdrAPrdcw">2014</a> as an alternative to MVC architecture. The Flux architecture is based on the following components:

- Store/ Stores: Serves as a container for the app state & logic
- Action: Enables data passing to the dispatcher
- View: Same as the view in MVC architecture, but in the context of React components
- Dispatcher – Coordinates actions & updates to stores

![Flux architecture](images/flux.png)

The ```view``` is basically the component tree in a modern application. A user can interact with the View in order to trigger an ```action```(e.g. a click on a button). An Action would encapsulate all the necessary information to update the state in the ```store```. Then, the ```dispatcher``` on the way delegates the Actions to the Store. The new state would be propagated from the Store to the View to update them. The last part closes the loop of the unidirectional data flow.

# Redux

Redux takes most of the architecture patterns from Flux to be a predictable state container for JavaScript apps, so you have the ```state``` of your application managed by Redux.

So why is it called Redux? Because it combines the two words Reducer and Flux. 

Some general rules of how Redux handles state:

  - State is read-only, and actions are the only way to modify it.
  - Changes happen one way, and one way only: dispatch(action) -> reducer -> new state.
  - The reducer function must be "pure" – it cannot modify its arguments, and it can’t have side effects.

## Action

An action in Redux is a JavaScript object. It has a type and an optional payload. The type is often referred to as action type. While the type is a string literal, the payload can be anything from a string to an object.

```JS
{
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false },
}
```

Executing an action is called ```dispatching``` in Redux. You can dispatch an action to alter the state in the Redux store. You only dispatch an action when you want to change the state. The dispatching of an action is triggered in your view. 

## Reducer(s)

The view dispatches an action, an action object with action type and optional payload, which passes through all reducers. What's a reducer? 

A ```reducer``` is a pure function. It always produces the same output when the input stays the same. It has no side-effects, thus it is only an input/output operation. A reducer has two inputs: state and action. The state is always the global state object from the Redux store. The action is the dispatched action with a type and optional payload. The reducer reduces - that explains the naming - the previous state and incoming action to a new state.

A reducer is a function that is similar to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Array.prototype.reducer()</a> method. The JS reduce() method accepts a callback function which will be called once for each element of the array. The callback function gets called with 2 arguments: the last iteration's result and the current array element. The callback function combines the current item with the previous "total" result and returns the new total. 

The callback function you pass in to reduce could rightfully be called a "reducer" because it reduces a whole array of items down to a single result. 

A reducer function takes the current state, and a action and returns the new state. So the differnce between a reducer function and Array.prototype.reduce() is that a reducer function "reduce" a set of actions into a single state (instead of an array's items to a single result). 

The reducer function has another job too. It should return the initial state the first time it’s called. This is sort of like “bootstrapping” your app. It’s gotta start somewhere, right?

```JS
const initialState = {
   count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'TODO_ADD' : {
      return state.concat(action.todo);
    }
    case 'TODO_TOGGLE' : {
      return state.map(todo =>
        todo.id === action.todo.id
          ? {...todo, completed: !todo.completed }
          : todo
      );
    }
    default : return state;
  }
}
```

## Store

Redux gives you a store, and let's you keep state in it, and get state out, and respond when the state changes, and that's all it does. 

> Be careful in thinking that the ```store``` and ```state``` are the same.  Technically, the state is the data, and the store is where it’s kept.

```JS
import { createStore } from 'redux';
```

Now you use it to create a store instance. The <a href="https://redux.js.org/api/createstore">createStore function</a> takes one mandatory argument: a reducer. 

```JS
const store = createStore(reducer);
```

In addition, the createStore takes a second optional argument: the initial state. 

```JS
onst store = createStore(reducer, []);
```

### Dispatching an action

The store we created has a built-in function called <a href="https://redux.js.org/api/store#dispatchaction">dispatch</a>. Call it with an action, and Redux will call your reducer with that action (and then replace the state with whatever your reducer returned).

```JS
const store = createStore(reducer);
store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false },
});
```

> Every call to dispatch results in a call to your reducer!

## React and Redux: Connecting State to React

To setup React in Redux you need to install the two packages:

```
npm install redux react-redux
```

It's ```react-redux``` that lets you connect pieces of the state to React components, because ```redux``` knows nothing about React at all.

The <a href="https://www.npmjs.com/package/redux">redux library</a> can be used outside of a React app with other front-end libraries like Vue, Angular, and even backend Node/Express apps.

#### Provider component

The <a href="https://www.npmjs.com/package/react-redux">react-redux</a> library comes a component called <a href="https://react-redux.js.org/api/provider">Provider</a>. The Provider allows us to declare the data that we want available throughout our component tree.

By wrapping the entire ```<App/>``` with the Provider component, every component in the App tree will be able to access the Redux store if it wants to.

```JS
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Prover>
```

<strong>But, not automatically. 😲 </strong>

### Using Connect()()

To allow a compoment to get the state out of Redux store, you can use the <a href="https://react-redux.js.org/api/connect">connect</a> function. 

```JS
import { connect } from 'react-redux';
```

> The connect function returns a brand new component and passes that new component any data that it needs from the store.

As the first argument passed in to connect, <a href="https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object">mapStateToProps</a> is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.

It should take a first argument called ```state```, optionally a second argument called ```ownProps```, and return a plain object containing the data that the connected component needs.

```JS
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id],
})
```

#### mapStateToProps

The purpose of the ```mapStateToProps``` function is to give the component access to the Redux state via props. 

> mapStateToProps is a function that takes in the Redux state and converts it to a format that is easy for your React components to work with. 

This means that the structure of the state that your React components gets is not the same structure as the Redux state.

mapStateToProps is automatically called by Redux internals every time your state changes. It gets the new Redux state as input parameter and it returns an object that is passed into the connected componentas props.

#### mapDispatchToProps

The purpose of the ```mapDispatchToProps``` function is to give the component access to which actions your compoment needs to dispatch via props.

```JS
const mapDispatchToProps = dispatch => (
   {
        submitNewTodo: (todo) => dispatch(actions.addTodo(todo))
   }
);
```

The <a href="https://react-redux.js.org/using-react-redux/connect-mapdispatch#providing-a-mapdispatchtoprops-parameter">mapDispatchToProps</a> function maps actions to the component. 

It’s a function that gets ```dispatch``` as input parameter. It returns an object where the keys are mapped as props to the wrapping component.

> Not every component will need both parameters defined for connect()(). If you only need state or actions for a particular compoment, you can ignore passing anything to the 2nd paramter or pass null for the 1st parameter.

Only needs state from Redux store via props:
```JS
export default connect(mapStateToProps)(TodoList);
```

Only needs actions to dispatch from reducer(s) via props:
```JS
export default connect(null, mapDispatchToProps)(Todo);
```

> The return of connect() is a higher-order function that takes your component and returns a wrapper component with the additional props it injects. So when connect is first invoked (passing mapStateToProps and/or mapDispatchToProps), it returns a brand new function, then you invoke that new function passing it the component that you want render with that data and/or actions attached to it (2nd argument).

#### Currying and closure

The reason connect has the two parenthesis ()() is because of ```currying``` and ```closure```. Currying the process in functional programming that transforms a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

```JS
function multiply(a, b) {
  return a * b;
}
// Usually we will call the above function as multiply(1, 2)
// We can re-write it using a closure and execute it using currying: 
function multiply(a) {
  return (b) => {
    return a * b;
  }
}
console.log(multiply(1)(2));
// as opposed to separately:
const a = multiply(1) // => function(b) return 1 * b
const product = a(2);
```

## Additional Resources:
- [Redux General Overview](https://www.youtube.com/watch?v=_Mk1fyI13pc)
- [Redux for Beginners - Dev Ed YouTube Channel](https://www.youtube.com/watch?v=CVpUuw9XSjY)
- [Redux Tutorials - Codevolution YouTube Playlist](https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)