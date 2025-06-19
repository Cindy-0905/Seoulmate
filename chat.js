// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

// Firebase Configuration Object
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'your-database-url',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// DOM Elements
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message');
const messagesContainer = document.querySelector('.messages');

// Listen for new messages
function listenForMessages() {
  const messagesRef = ref(db, 'messages');
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    displayMessages(messages);
  });
}

// Display messages in chat box
function displayMessages(messages) {
  messagesContainer.innerHTML = ''; // Clear previous messages
  for (const key in messages) {
    if (messages.hasOwnProperty(key)) {
      const message = messages[key];
      const messageElement = document.createElement('div');
      messageElement.textContent = `${message.user}: ${message.message}`;
      messagesContainer.appendChild(messageElement);
    }
  }
}

// Send message to Firebase
function sendMessage(user, messageText) {
  const messageId = Date.now();
  const messageRef = ref(db, 'messages/' + messageId);
  set(messageRef, {
    user: user,
    message: messageText,
    timestamp: messageId
  });
}

// Event listener for sending messages
sendButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  const user = 'User1'; // Replace with actual logged-in user
  sendMessage(user, messageText);
  messageInput.value = ''; // Clear input field after sending
});

// Initialize message listener
listenForMessages();
