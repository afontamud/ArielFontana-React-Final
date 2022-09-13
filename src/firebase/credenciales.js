import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_4ymK9QG2a2fS233FQGcyyqaouauOTI",
  authDomain: "reactecomerse.firebaseapp.com",
  projectId: "reactecomerse",
  storageBucket: "reactecomerse.appspot.com",
  messagingSenderId: "450030429207",
  appId: "1:450030429207:web:9a9e79c9536525aa19e852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;