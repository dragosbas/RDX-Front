import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {
    const { singInWithBackend, currentUser } = useContext(AuthContext);
    
    const formFields = {
        "email": "robert123@gmail.com",
        "password": "Robert123"
    }
    function handleSignIn () {
        singInWithBackend(formFields)
    }
    
    return (
        <div>
            {currentUser ? (
                <Navigate to="/" />
            ) : (
                <button onClick={handleSignIn}>Apasa !</button>
            )}
        </div>
    )
}

export default LoginPage