import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI03Y2RgugAu61tNbpR0ZYqH0rXdHqA8A",
  authDomain: "dbestai.firebaseapp.com",
  projectId: "dbestai",
  storageBucket: "dbestai.appspot.com",
  messagingSenderId: "951922854224",
  appId: "1:951922854224:web:9d43d4a71fe9c34b198455"
  // apiKey: env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
export const provider = new GoogleAuthProvider();
