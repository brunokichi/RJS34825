import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcfOuHyvf6-1YJVqvbZVN_ETcwTbVeIO4",
  authDomain: "rjs34825.firebaseapp.com",
  projectId: "rjs34825",
  storageBucket: "rjs34825.appspot.com",
  messagingSenderId: "243790830538",
  appId: "1:243790830538:web:f31803a571d4c870634d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);
