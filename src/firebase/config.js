// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmfba0DUsFoEYu1ynpyqIqCRaUqm4xkXk",
  authDomain: "react-b5b22.firebaseapp.com",
  projectId: "react-b5b22",
  storageBucket: "react-b5b22.appspot.com",
  messagingSenderId: "294443241927",
  appId: "1:294443241927:web:3ce7119b702b72167dc9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);