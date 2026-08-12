import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

export default function Login (){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }

    return (
        <>
        <input 
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        />
        {" "}
        <input 
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}