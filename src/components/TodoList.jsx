import Todo from './Todo';

export default function TodoList ({todos}) {

    return (    
        <ul>
            {
                todos.map((todo, index) => {
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