// Importer les fonctions nécessaires depuis le SDK Firebase v9
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlWL7pLWVIXhmLP-b3dTOmbxEwAyWvhto",
  authDomain: "seoulmate-d34c2.firebaseapp.com",
  projectId: "seoulmate-d34c2",
  storageBucket: "seoulmate-d34c2.appspot.com",
  messagingSenderId: "570003400199",
  appId: "1:570003400199:web:08cfd5b4f6fa82b2ea6ca2",
  measurementId: "G-8MV4ZWQ8SF"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une instance de l'authentification Firebase
const auth = getAuth(app);

// Fonction de connexion
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "Connexion réussie ! ❤️";
      window.location.href = "chat.html"; // Si connexion réussie, rediriger vers chat.html
    })
    .catch((error) => {
      document.getElementById("auth-message").innerText = error.message;
    });
}

// Fonction d'inscription
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
