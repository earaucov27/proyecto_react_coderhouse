// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaWu5cjIiKKXgi8L2XZan-JN3TZ-zI_Mo",
  authDomain: "dpixels-31700.firebaseapp.com",
  projectId: "dpixels-31700",
  storageBucket: "dpixels-31700.appspot.com",
  messagingSenderId: "243397147661",
  appId: "1:243397147661:web:c0aa20ed44ce19f7b2a944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
