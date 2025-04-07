// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAPxUwxFeuKwz9y8BRU4bhnYHp16V6eMg",
  authDomain: "appointment-booking-app-5f1c5.firebaseapp.com",
  projectId: "appointment-booking-app-5f1c5",
  storageBucket: "appointment-booking-app-5f1c5.firebasestorage.app",
  messagingSenderId: "647050017276",
  appId: "1:647050017276:web:95cc2f690ed1b8048f5a79",
  measurementId: "G-H12E0DEX23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;