import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "authexamnotes-98e42.firebaseapp.com",
  projectId: "authexamnotes-98e42",
  storageBucket: "authexamnotes-98e42.firebasestorage.app",
  messagingSenderId: "424944956771",
  appId: "1:424944956771:web:6e83af2ff43424fc024f56"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
export{auth, provider}