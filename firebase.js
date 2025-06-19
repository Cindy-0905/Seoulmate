// Importer les fonctions nécessaires du SDK Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push, onChildAdded } from "firebase/database";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfbVpBgh5Pt86suk_NStuUcvUBAlN61_M",
  authDomain: "seoulmate-552f8.firebaseapp.com",
  projectId: "seoulmate-552f8",
  storageBucket: "seoulmate-552f8.appspot.com",
  messagingSenderId: "454531820117",
  appId: "1:454531820117:web:ee97698d89c87f146842dc",
  measurementId: "G-LBEJGDJEBS"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
const auth = getAuth(app);
const database = getDatabase(app);

// Fonction d'inscription
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Utilisateur inscrit :", user);
      // Vous pouvez rediriger vers une autre page ou afficher un message de succès
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur d'inscription :", errorCode, errorMessage);
    });
}

// Fonction de connexion
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Utilisateur connecté :", user);
      // Vous pouvez rediriger vers la page de chat ou afficher un message de succès
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur de connexion :", errorCode, errorMessage);
    });
}

// Fonction pour envoyer un message
function sendMessage() {
  const message = document.getElementById("message").value;
  const user = auth.currentUser;

  if (message && user) {
    const messagesRef = ref(database, "messages");
    push(messagesRef, {
      user: user.email,
      message: message,
      timestamp: new Date().toISOString()
    }).then(() => {
      console.log("Message envoyé");
      document.getElementById("message").value = ""; // Effacer le champ de saisie
    }).catch((error) => {
      console.error("Erreur lors de l'envoi du message :", error);
    });
  }
}

// Fonction pour afficher les messages en temps réel
const messagesRef = ref(database, "messages");

onChildAdded(messagesRef, (snapshot) => {
  const messageData = snapshot.val();
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${messageData.user}:</strong> ${messageData.message}`;
  document.querySelector("#chat-box .messages").appendChild(messageElement);
});
