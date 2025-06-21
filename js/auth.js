function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "test@seoulmate.com" && password === "1234") {
    document.getElementById("auth-message").innerText = "Connexion réussie !";
    // Redirection possible :
    // window.location.href = "chat.html";
  } else {
    document.getElementById("auth-message").innerText = "Email ou mot de passe incorrect.";
  }
}

function signup() {
  document.getElementById("auth-message").innerText = "Fonction d'inscription à venir.";
}
