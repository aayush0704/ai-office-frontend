const BACKEND_URL = "https://ai-office-backend.onrender.com";

async function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += `<p><b>You:</b> ${userMessage}</p>`;
    
    const response = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    document.getElementById("chat-box").innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
}
