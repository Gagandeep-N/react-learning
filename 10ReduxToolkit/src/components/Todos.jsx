import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todoSlice'
export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleDelete(todo.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}