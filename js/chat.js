// chat.js
document.getElementById("send-button").addEventListener("click", function() {
  const message = document.getElementById("message").value;
  if (message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    document.querySelector(".messages").appendChild(messageDiv);
    document.getElementById("message").value = ""; // Clear the textarea
  }
});
