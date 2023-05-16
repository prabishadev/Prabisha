// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDahOMRkXAWG2LxJ6oolS5dQaDBqYyVCxo",
  authDomain: "prabisha-login-6e0c4.firebaseapp.com",
  projectId: "prabisha-login-6e0c4",
  storageBucket: "prabisha-login-6e0c4.appspot.com",
  messagingSenderId: "700495003340",
  appId: "1:700495003340:web:415a7a8f917ee96292cc69",
  measurementId: "G-E1N8R8N3HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider, analytics};
