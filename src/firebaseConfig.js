// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzI2-sth77-3y-tiGYLDMxu3kYO7kUEsg",
  authDomain: "ticketmaster-bcaa3.firebaseapp.com",
  projectId: "ticketmaster-bcaa3",
  storageBucket: "ticketmaster-bcaa3.appspot.com",
  messagingSenderId: "369502488474",
  appId: "1:369502488474:web:36570b38d73852d52f1c23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
