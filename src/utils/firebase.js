// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY0-VstDeG8QbvwwRK4_ZW3jQlp6IdEPs",
  authDomain: "netflixgpt-2152e.firebaseapp.com",
  projectId: "netflixgpt-2152e",
  storageBucket: "netflixgpt-2152e.appspot.com",
  messagingSenderId: "1004209718274",
  appId: "1:1004209718274:web:7de1d88da2d83e3d6fd31b",
  measurementId: "G-2H0JFZQRDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
