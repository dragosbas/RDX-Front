import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [error, setError] = useState(null)

  const { singInWithBackend, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    setError(true)
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    singInWithBackend(data)
    console.log(data);
  }
  function handleSubmitClick(event) {
    event.preventDefault();
        navigate('/register');
  }

  return (
    <>
      {currentUser ? (
        <Navigate to="/" />
      ) : (<div className='signin'>
        <div className='signin__container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
              <h1 className='signin__label'>Email</h1>
            </label >
            <input type='email' name='email' id='email'></input>
            <label htmlFor='password'>
              <h1 className='signin__label'>Password</h1>
            </label>
            <input name='password' type='password' id='password'></input>
            <h1 className='signin__label'> </h1>
            {error && <p className='signin__tos'>Something went wrong</p>}
            <div className="flex justify-center">
              <button className="signin__btn flex items-center justify-center" type="submit">
                Sign in
              </button>
              <h1 className='signin__label'> </h1>
              <button className="signin__btn flex items-center justify-center" onClick={handleSubmitClick}  >
                Sign up
              </button>
            </div>
          </form >
        </div >
      </div >
      )}
    </>
  )
}

export default SignIn