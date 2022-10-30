// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fb-platinum-echamp.firebaseapp.com",
  projectId: "fb-platinum-echamp",
  storageBucket: "fb-platinum-echamp.appspot.com",
  messagingSenderId: "549326499769",
  appId: "1:549326499769:web:438f2ebc67d2b6af591068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);

export default authFirebase


