document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".chat");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
   
    function addMessage(user, message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<strong>${user}:</strong> ${message}`;
        chatContainer.appendChild(messageDiv);
    }

    sendButton.addEventListener("click", function () {
        const user = "You"; 
        const message = messageInput.value.trim();

        if (message !== "") {
            addMessage(user, message);
            messageInput.value = ""; 
        }
    });

    
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click(); 
        }
    });
});