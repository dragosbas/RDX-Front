import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [error, setError] = useState(null)

  const { signUpWithBackend, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    if (data['password'] === data['passwordCheck']) {
      signUpWithBackend(data)
      navigate('/');
    }
    setError(true)
    console.log(currentUser)
  }

  return (
    <>
      {currentUser ? (
        <Navigate to="/" />
      ) : (<div className='signin'>
        <div className='signin__container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
              <h1 className='signin__label'>Name</h1>
            </label >
            <input type='text' name='name' id='name'></input>
            <label htmlFor='email'>
              <h1 className='signin__label'>Email</h1>
            </label >
            <input type='email' name='email' id='email'></input>
            <label htmlFor='password'>
              <h1 className='signin__label'>Password</h1>
            </label>
            <input name='password' type='password' id='password'></input>
            <label htmlFor='passwordCheck'>
              <h1 className='signin__label'>Check Password</h1>
            </label>
            <input name='passwordCheck' type='password' id='passwordCheck'></input>
            <h1 className='signin__label'> </h1>
            {error && <p className='signin__tos'>Something went wrong</p>}
            <h1 className='signin__label'> </h1>
            <button className="signin__btn flex items-center justify-center" type="submit" >
              Sign up
            </button>
          </form >
        </div >
      </div >
      )}
    </>
  )
}

export default Register