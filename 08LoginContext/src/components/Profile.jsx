import {useContext} from 'react';
import UserContext from '../context/UserContext'
export default function Profile() {
    const { user } = useContext(UserContext);
    
    if (!user) {
        return (
            <h1>Please Login</h1>
        )
    }
    else{
        return (
            <h1> Welcome {user.userName}</h1>
        )
    }
}