// js/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbVpBgh5Pt86suk_NStuUcvUBAlN61_M",
  authDomain: "seoulmate-552f8.firebaseapp.com",
  projectId: "seoulmate-552f8",
  storageBucket: "seoulmate-552f8.firebasestorage.app",
  messagingSenderId: "454531820117",
  appId: "1:454531820117:web:ee97698d89c87f146842dc",
  measurementId: "G-LBEJGDJEBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
