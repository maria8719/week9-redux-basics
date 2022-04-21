import {connect} from 'react-redux';
import * as actions from '../redux/actions/todoActions';

const Todo = (props) =>{

    const handleClick = (id) => {
        if (!id) return;
        props.submitDeleteTodo(id);
    };

    return (
        <>
            <li> 
                <span>{props.text}</span> 
                <button onClick={() => handleClick(props.id)}>X</button>
            </li>
        </>
    );
};

const mapDispatchToProps = dispatch => (
    {
         submitDeleteTodo: (todo) => dispatch(actions.deleteTodo(todo))
    }
 );
 
 export default connect(null, mapDispatchToProps)(Todo);