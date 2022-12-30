import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyCcfOuHyvf6-1YJVqvbZVN_ETcwTbVeIO4",
  authDomain: "rjs34825.firebaseapp.com",
  projectId: "rjs34825",
  storageBucket: "rjs34825.appspot.com",
  messagingSenderId: "243790830538",
  appId: "1:243790830538:web:f31803a571d4c870634d33"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBNh5mATmNQC-SHZjV91WlFFINLa5eFknQ",
  authDomain: "ec34825-1dc5b.firebaseapp.com",
  projectId: "ec34825-1dc5b",
  storageBucket: "ec34825-1dc5b.appspot.com",
  messagingSenderId: "660416562074",
  appId: "1:660416562074:web:ccde43b82f9fc779fc3023",
  measurementId: "G-Z53XKVEQEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);
