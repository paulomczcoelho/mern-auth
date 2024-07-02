// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyDxUlqHtyY9z9IBjRf7kfnWuSWvA4WEmcc",
  authDomain: "mern-auth-47593.firebaseapp.com",
  projectId: "mern-auth-47593",
  storageBucket: "mern-auth-47593.appspot.com",
  messagingSenderId: "118375772264",
  appId: "1:118375772264:web:ec743eef6b08fe7d7a8bdd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
