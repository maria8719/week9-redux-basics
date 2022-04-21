import {connect} from 'react-redux';
import Todo from '../components/Todo';

const TodoList = (props) => {

    const todos = [];

    props.todoList.forEach(todo => {
        todos.push(
            <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
            />)
   });

    return (    
        <ul>
              {todos}
        </ul>
    );
};

// mapStateToProps is a function that takes the state as an argument
// and returns an object that will become props for the component
const mapStateToProps = (state) => {
    const {todos} = state.todos;
    return { 
            todoList: todos
        }
}

export default connect(mapStateToProps)(TodoList);