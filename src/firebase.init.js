// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCXcydSuq2bmC5TU7fxb7lfGpUewm0bI8",
  authDomain: "anonymous-feedback-288d2.firebaseapp.com",
  projectId: "anonymous-feedback-288d2",
  storageBucket: "anonymous-feedback-288d2.appspot.com",
  messagingSenderId: "708622178766",
  appId: "1:708622178766:web:4e11db3999edbb4cee339f",
  measurementId: "G-W9XEH5MPG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;