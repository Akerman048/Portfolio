// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA42boIfsw-qaT6SBUT2ylahIc54REVzJk",
  authDomain: "oleksiienko-valerii-portfolio.firebaseapp.com",
  projectId: "oleksiienko-valerii-portfolio",
  storageBucket: "oleksiienko-valerii-portfolio.firebasestorage.app",
  messagingSenderId: "385913028350",
  appId: "1:385913028350:web:3f01767ee7c7e8d9676faf",
  measurementId: "G-PK0G25JDY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);