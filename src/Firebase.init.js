// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEquZhmnoroDFYa1D8MwIAkcRjTg4uVY0",
    authDomain: "lafz-manufacturer.firebaseapp.com",
    projectId: "lafz-manufacturer",
    storageBucket: "lafz-manufacturer.appspot.com",
    messagingSenderId: "1095255865950",
    appId: "1:1095255865950:web:901f76095ee34f5096d2cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;