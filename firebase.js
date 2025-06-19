// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SignUp function
function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login function
function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout function
function logout() {
  return signOut(auth);
}

// Login event listener
function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password)
    .then(userCredential => {
      console.log('Utilisateur connecté');
      // Redirect to another page or display success message
    })
    .catch(error => {
      console.error('Erreur de connexion:', error.message);
    });
}

// Register event listener
function registerUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signup(email, password)
    .then(userCredential => {
      console.log('Utilisateur inscrit');
      // Redirect to another page or display success message
    })
    .catch(error => {
      console.error('Erreur d\'inscription:', error.message);
    });
}
