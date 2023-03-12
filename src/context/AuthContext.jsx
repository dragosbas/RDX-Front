import { createContext } from "react";
import { useAtom } from "jotai";
import { authLocalState, userState } from '../state';
import axiosInstance from "../helpers/axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useAtom(userState.currentUser);
  const [, setJwtTokenAtom] = useAtom(authLocalState.jwtTokenAtom)

  const signInWithToken = (token) => {
    const fetchData = async () => {
      console.log(jwtDecode(token))
      try {
        //
        // let loginResponse = await axiosInstance.post('/user/login', {})
        // setCurrentUser({ ...loginResponse.data })

        setCurrentUser(jwtDecode(token))
        axiosInstance.defaults.headers.common['Authorization'] = `BEARER ${token}`
      }
      catch (e) {
        signOut()
      }
    }
    fetchData()
  }

  const singInWithBackend = async (formFields) => {
    try {
      const requestBody = formFields
      const userCredentials = await axiosInstance.post('/user/login', requestBody);
      setJwtTokenAtom(userCredentials['data'])
      setCurrentUser(jwtDecode(userCredentials['data']))
      axiosInstance.defaults.headers.common['Authorization'] = `BEARER ${userCredentials['data']}`
    }
    catch (e) { console.log(e) }
  }

  const signUpWithBackend = async(formFields)=>{
    try {
      const requestBody = formFields
      const userCredentials = await axiosInstance.post('/user/register', requestBody);
      setJwtTokenAtom(userCredentials['data'])
      setCurrentUser(jwtDecode(userCredentials['data']))
      axiosInstance.defaults.headers.common['Authorization'] = `BEARER ${userCredentials['data']}`
    }
    catch (e) { console.log(e) }
    
  }

  const updateProfile = async (formFields)=>{
    try {
      const requestBody = formFields
      await axiosInstance.put('/user/update', requestBody);
      setCurrentUser(formFields)
    }
    catch (e) { console.log(e) }
    }


  const signOut = () => {
    axiosInstance.defaults.headers.common['Authorization'] = `BEARER `
    setJwtTokenAtom(null)
    setCurrentUser(null)
  };

  return (
    <AuthContext.Provider value={{ currentUser, singInWithBackend, signOut,signInWithToken,signUpWithBackend,updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}