import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyvlNrBoslwXy1egYFk07i2AC8L_0XU7M",
  authDomain: "my-react-blog-82c0f.firebaseapp.com",
  projectId: "my-react-blog-82c0f",
  storageBucket: "my-react-blog-82c0f.appspot.com",
  messagingSenderId: "1086131279393",
  appId: "1:1086131279393:web:ea7d8f875df76df8993560"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
