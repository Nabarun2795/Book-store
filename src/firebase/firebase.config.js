import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfTF5lj6Qq-PpBkTOMD0q4lTMpwvIpDbc",
  authDomain: "book-store-mern-2fb6e.firebaseapp.com",
  projectId: "book-store-mern-2fb6e",
  storageBucket: "book-store-mern-2fb6e.firebasestorage.app",
  messagingSenderId: "1055516742378",
  appId: "1:1055516742378:web:cdfc8601da0a3f233bbd93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);