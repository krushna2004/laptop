// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnSCvX0eefnGKSMq-7XtuBapeAXVbJfCg",
  authDomain: "otpgen-a8349.firebaseapp.com",
  projectId: "otpgen-a8349",
  storageBucket: "otpgen-a8349.appspot.com",
  messagingSenderId: "937079186982",
  appId: "1:937079186982:web:1ffb6a0e8b1b7ff306a8e7",
  measurementId: "G-3THNKHFJF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;