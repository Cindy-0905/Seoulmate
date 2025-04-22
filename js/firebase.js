// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlWL7pLWVIXhmLP-b3dTOmbxEwAyWvhto",
  authDomain: "seoulmate-d34c2.firebaseapp.com",
  projectId: "seoulmate-d34c2",
  storageBucket: "seoulmate-d34c2.appspot.com", 
  messagingSenderId: "570003400199",
  appId: "1:570003400199:web:08cfd5b4f6fa82b2ea6ca2"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

// Référence à l'authentification Firebase
const auth = firebase.auth();

// Fonction pour se connecter
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "Connexion réussie ! ❤️";
      window.location.href = "chat.html"; // Si connexion réussie, on redirige vers chat.html
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = error.message;
    });
}

// Fonction pour s’inscrire
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "Inscription réussie 🎉";
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = error.message;
    });
}
