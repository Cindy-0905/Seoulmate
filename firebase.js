// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfbVpBgh5Pt86suk_NStuUcvUBAlN61_M",
  authDomain: "seoulmate-552f8.firebaseapp.com",
  projectId: "seoulmate-552f8",
  storageBucket: "seoulmate-552f8.appspot.com",
  messagingSenderId: "454531820117",
  appId: "1:454531820117:web:ee97698d89c87f146842dc",
  measurementId: "G-LBEJGDJEBS",
  databaseURL: "https://seoulmate-552f8-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
