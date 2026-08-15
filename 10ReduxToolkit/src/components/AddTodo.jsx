import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice'

export default function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }

    return(
        <>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}