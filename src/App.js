import Home from './pages/Home'
import { AuthContext } from './context/AuthContext';
import { useContext, useEffect, } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { authLocalState } from './state';
import { useAtom } from 'jotai';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const App = () => {

  const [jwtTokenAtom] = useAtom(authLocalState.jwtTokenAtom)
  const { currentUser, signInWithToken } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) { return <Navigate to='/login' /> }
    return children
  }
  useEffect(() => { 
    console.log(jwtTokenAtom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    jwtTokenAtom && signInWithToken(jwtTokenAtom) }, [jwtTokenAtom,])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App