import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-storage.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBlWL7pLWVIXhmLP-b3dTOmbxEwAyWvhto",
  authDomain: "seoulmate-d34c2.firebaseapp.com",
  projectId: "seoulmate-d34c2",
  storageBucket: "seoulmate-d34c2.appspot.com",
  messagingSenderId: "570003400199",
  appId: "1:570003400199:web:08cfd5b4f6fa82b2ea6ca2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const profilePic = document.getElementById("profile-pic");
const uploadPic = document.getElementById("upload-pic");
const bioInput = document.getElementById("bio");
const saveBtn = document.getElementById("save-profile");
const statusMessage = document.getElementById("status-message");
const badgeList = document.getElementById("badge-list");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      bioInput.value = data.bio || "";
      if (data.photoURL) profilePic.src = data.photoURL;

      if (data.badges && Array.isArray(data.badges)) {
        badgeList.innerHTML = data.badges.map(b => `<span class="badge">${b}</span>`).join('');
      }
    }

    saveBtn.onclick = async () => {
      let photoURL = profilePic.src;

      if (uploadPic.files[0]) {
        const storageRef = ref(storage, `profilePics/${user.uid}`);
        await uploadBytes(storageRef, uploadPic.files[0]);
        photoURL = await getDownloadURL(storageRef);
        profilePic.src = photoURL;
      }

      const bio = bioInput.value;

      await setDoc(docRef, { photoURL, bio }, { merge: true });
      statusMessage.innerText = "Profil mis à jour ! 🌟";
    };
  } else {
    statusMessage.innerText = "Tu dois être connecté(e) pour voir ton profil.";
  }
});
