import {connect} from 'react-redux';
import Todo from '../components/Todo';

const TodoList = (props) => {

    return (    
        <ul>
            {
                props.todoList.map((todo, index) => {
                    return (
                        <Todo 
                            key={index}
                            id={todo.id}
                            text={todo.text}
                        />
                    );
                }
            )}
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