import {connect} from 'react-redux';
import * as actions from '../redux/actions/todoActions';
import { useRef } from "react";

const TodoForm = (props) =>{

    // Create a ref to hold the input element
    // Eliminates the need for local state  
    // Becomes an uncontrolled component (instead of controlled)
    // https://medium.com/technofunnel/react-uncontrolled-elements-with-useref-hooks-9c5873476c6f
    // https://reactjs.org/docs/hooks-reference.html#useref
    const todoInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = todoInput.current.value;
        if (!todo) return;
        props.submitNewTodo(todo);
        todoInput.current.value = ''
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="todo" 
                    ref = {todoInput}
                 />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => (
   {
        submitNewTodo: (todo) => dispatch(actions.addTodo(todo))
    }
);

export default connect(null, mapDispatchToProps)(TodoForm);