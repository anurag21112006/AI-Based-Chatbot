async function sendMessage() {

    const input = document.getElementById("userInput");
    const message = input.value;

    if (message === "") return;

    const chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<div class="user"><b>You:</b> ${message}</div>`;

    const response = await fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const data = await response.json();

    chatbox.innerHTML += `<div class="bot"><b>Bot:</b> ${data.response}</div>`;

    input.value = "";

    chatbox.scrollTop = chatbox.scrollHeight;
}
