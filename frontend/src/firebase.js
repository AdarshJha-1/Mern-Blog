// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3c527.firebaseapp.com",
  projectId: "mern-blog-3c527",
  storageBucket: "mern-blog-3c527.appspot.com",
  messagingSenderId: "965787093551",
  appId: "1:965787093551:web:27412c4f904cdc006194da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);