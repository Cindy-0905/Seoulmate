// script.js
// Gérer la navigation entre les sections
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let sectionId = this.getAttribute("href").substring(1); // récupère l'ID de la section
    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  });
});

// Publier un post
document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const imageFile = document.getElementById("postImage").files[0];
  const caption = document.getElementById("postCaption").value;

  const postHtml = `
    <div class="post">
      <img src="${URL.createObjectURL(imageFile)}" alt="Post Image" />
      <p>${caption}</p>
    </div>
  `;

  document.getElementById("postsList").innerHTML += postHtml;

  // Réinitialiser le formulaire après la soumission
  document.getElementById("postForm").reset();
});

// Chat en temps réel
let messages = [];
function sendMessage() {
  const message = document.getElementById("messageInput").value;
  if (message) {
    messages.push(message);
    updateChat();
    document.getElementById("messageInput").value = ""; // Réinitialiser le champ
  }
}

function updateChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
}
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // empêche le changement de page

      const targetId = link.getAttribute("id").replace("-link", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // cacher toutes les sections
        sections.forEach(section => section.classList.remove("active"));
        // afficher la bonne
        targetSection.classList.add("active");
      }
    });
  });
});

