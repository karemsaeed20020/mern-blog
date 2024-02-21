// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-14876.firebaseapp.com",
  projectId: "mern-blog-14876",
  storageBucket: "mern-blog-14876.appspot.com",
  messagingSenderId: "309023806435",
  appId: "1:309023806435:web:ef362f85925ab2030d86d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);