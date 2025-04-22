// -------------------- NAVIGATION ENTRE SECTIONS --------------------
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");
      const targetId = href.startsWith("#") ? href.slice(1) : null;

      if (targetId) {
        sections.forEach(section => section.classList.remove("active"));
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
      }
    });
  });

  // Activer par défaut la section "accueil" au chargement
  document.querySelector(".section").classList.add("active");
});

// -------------------- PUBLICATION DE POST --------------------
document.getElementById("postForm")?.addEventListener("submit", function(e) {
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
  document.getElementById("postForm").reset();
});

// -------------------- CHAT SIMPLIFIÉ --------------------
let messages = [];

function sendMessage() {
  const message = document.getElementById("messageInput").value;
  if (message) {
    messages.push(message);
    updateChat();
    document.getElementById("messageInput").value = "";
  }
}

function updateChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
}
