// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f92ff.firebaseapp.com",
  projectId: "mern-blog-f92ff",
  storageBucket: "mern-blog-f92ff.appspot.com",
  messagingSenderId: "845042499191",
  appId: "1:845042499191:web:f4a8aec7e76b0fed849072"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);