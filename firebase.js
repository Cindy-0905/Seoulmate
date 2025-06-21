/// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfbVpBgh5Pt86suk_NStuUcvUBAlN61_M",
  authDomain: "seoulmate-552f8.firebaseapp.com",
  projectId: "seoulmate-552f8",
  storageBucket: "seoulmate-552f8.appspot.com",
  messagingSenderId: "454531820117",
  appId: "1:454531820117:web:ee97698d89c87f146842dc"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction de connexion
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").textContent = "Connexion réussie ! ✅";
      // Redirection possible après connexion
      // window.location.href = "profil.html";
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = "Erreur : " + error.message;
    });
};

// Fonction d'inscription
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").textContent = "Inscription réussie ! 🎉";
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = "Erreur : " + error.message;
    });
};
