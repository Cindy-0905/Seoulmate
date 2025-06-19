// js/chat.js
import { auth, db } from './firebase.js';
import {
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

import {
  ref,
  push,
  onChildAdded
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js';

const messagesDiv = document.querySelector('.messages');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');

onAuthStateChanged(auth, user => {
  if (user) {
    const userId = user.uid;

    sendButton.addEventListener('click', () => {
      const text = messageInput.value.trim();
      if (text !== "") {
        const messageRef = ref(db, 'messages');
        push(messageRef, {
          text,
          userId,
          timestamp: Date.now()
        });
        messageInput.value = '';
      }
    });

    const messageRef = ref(db, 'messages');
    onChildAdded(messageRef, snapshot => {
      const data = snapshot.val();
      const msg = document.createElement('div');
      msg.classList.add('message');
      msg.textContent = `${data.userId.slice(0, 5)}: ${data.text}`;
      messagesDiv.appendChild(msg);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

  } else {
    window.location.href = "connexion.html";
  }
});
