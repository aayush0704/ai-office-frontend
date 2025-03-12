const BACKEND_URL = "https://ai-office-backend.onrender.com";

async function sendMessage() {
    let userMessage = document.getElementById("user-input").value.trim();
    if (!userMessage) return;

    appendMessage("You", userMessage, "user");

    const response = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    appendMessage("Bot", data.reply, "bot");
    document.getElementById("user-input").value = "";
}

function appendMessage(sender, message, type) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.innerHTML = `<b>${sender}:</b> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
