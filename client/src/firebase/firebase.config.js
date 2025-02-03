// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNgTpvZ56eKz1vZKuaQmuoAlgAPcDZ3nI",
  authDomain: "mern-book-inventory-17e98.firebaseapp.com",
  projectId: "mern-book-inventory-17e98",
  storageBucket: "mern-book-inventory-17e98.firebasestorage.app",
  messagingSenderId: "367267833643",
  appId: "1:367267833643:web:f1bb0abbb42b797759476e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;