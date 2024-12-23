// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDprEyWScc0Em5rFdUzrCRnpmCaaiORQco",
  authDomain: "mini-todo-aa498.firebaseapp.com",
  projectId: "mini-todo-aa498",
  storageBucket: "mini-todo-aa498.firebasestorage.app",
  messagingSenderId: "303888940410",
  appId: "1:303888940410:web:b05b583081a755c1c76ac3",
  measurementId: "G-NR1L6ZRBM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
