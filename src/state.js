import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
const mockdata = null
// console.log(mockdata)

// const messages = atom([]);
// const to_field = atom("");
// const searchProfessor = atom("")

const formErrors=atom({"loginForm":"","signup":""})


const currentMainPage = atom('Profile')
const currentUser = atom(null)
const chatBots = atom(mockdata?mockdata['chatbots']:{})
const conversations = atom(mockdata?mockdata['conversations']:{})
const companyMode = atom(false)

export const userState = { currentUser, conversations,chatBots,formErrors,currentMainPage,companyMode};

const jwtTokenAtom  = atomWithStorage('myToken' , null)
export const authLocalState ={jwtTokenAtom} 

