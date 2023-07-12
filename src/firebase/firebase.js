// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeq1IWdEhM8PZReuG3sgnooLZtfEzJNLY",
  authDomain: "crud-app-1070e.firebaseapp.com",
  projectId: "crud-app-1070e",
  storageBucket: "crud-app-1070e.appspot.com",
  messagingSenderId: "389641949515",
  appId: "1:389641949515:web:c8952d8d816c20c24fd8ce",
  measurementId: "G-9HSRGFV4DY",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = app.firestore();
