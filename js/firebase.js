import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlWL7pLWVIXhmLP-b3dTOmbxEwAyWvhto",
  authDomain: "seoulmate-d34c2.firebaseapp.com",
  projectId: "seoulmate-d34c2",
  storageBucket: "seoulmate-d34c2.appspot.com",
  messagingSenderId: "570003400199",
  appId: "1:570003400199:web:08cfd5b4f6fa82b2ea6ca2",
  measurementId: "G-8MV4ZWQ8SF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "Connexion réussie ! ❤️";
      window.location.href = "chat.html";
    })
    .catch((error) => {
      document.getElementById("auth-message").innerText = error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "Inscription réussie 🎉";
    })
    .catch((error) => {
      document.getElementById("auth-message").innerText = error.message;
    });
}
