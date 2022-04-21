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
                <input 
                  type="checkbox"
                  checked = { props.completed }
                  onChange = { () => props.submitToggleTodo(props.id) }
               />
                <span>{props.text}</span> 
                <button onClick={() => handleClick(props.id)}>X</button>
            </li>
        </>
    );
};

const mapDispatchToProps = dispatch => (
    {
         submitDeleteTodo: (todo) => dispatch(actions.deleteTodo(id)),
         submitToggleTodo: (todo) => dispatch(actions.toggleTodo(id))
    }
 );
 
 export default connect(null, mapDispatchToProps)(Todo);