// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBEu4Rd86Im_K62XNiTQFPoupCn34vUZU",
  authDomain: "ticketmaster-4f8d0.firebaseapp.com",
  projectId: "ticketmaster-4f8d0",
  storageBucket: "ticketmaster-4f8d0.appspot.com",
  messagingSenderId: "837057836453",
  appId: "1:837057836453:web:bc38765076d3ab2d1fe44c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
