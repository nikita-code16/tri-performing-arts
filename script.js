function toggleDropdown(menuId) {

    const menu = document.getElementById(menuId);

    document.querySelectorAll(".submenu").forEach(function(otherMenu) {

        if (otherMenu !== menu) {
            otherMenu.classList.remove("show");
        }

    });

    menu.classList.toggle("show");
}


/* Payment */

function makePayment() {

    alert("Payment page will open here.");

}


/* ================= LANGUAGE ================= */

let currentLanguage = "en";

function toggleLanguage() {

    if (currentLanguage === "en") {
        currentLanguage = "mr";
    } else {
        currentLanguage = "en";
    }

    document.querySelectorAll("[data-en]").forEach(function(element) {

        element.textContent = element.getAttribute(
            "data-" + currentLanguage
        );

    });

    const languageBtn = document.getElementById("languageBtn");

    if (currentLanguage === "en") {

        languageBtn.textContent = "मराठी";
        document.documentElement.lang = "en";

    } else {

        languageBtn.textContent = "English";
        document.documentElement.lang = "mr";

    }
}


/* Close dropdown when clicking outside */

document.addEventListener("click", function(event) {

    if (!event.target.closest(".dropdown")) {

        document.querySelectorAll(".submenu").forEach(function(menu) {
            menu.classList.remove("show");
        });

    }

});


/* ================= TRI ASSISTANT ================= */

function openAIChat() {

    document.getElementById("aiChatBox").style.display = "block";

}


function closeAIChat() {

    document.getElementById("aiChatBox").style.display = "none";

}


async function sendAIMessage() {

    const input = document.getElementById("aiUserInput");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const chatMessages = document.getElementById("aiChatMessages");


    /* User message */

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);


    /* Clear input */

    input.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;


    /* AI thinking message */

    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.textContent = "Thinking...";

    chatMessages.appendChild(aiMessage);


    try {

        const { askTRIAssistant } = await import("./ai.js");

        const answer = await askTRIAssistant(message);

        aiMessage.textContent = answer;

    } catch (error) {

        console.error("AI Error:", error);

        aiMessage.textContent =
            "Sorry, I could not answer right now. Please try again.";

    }


    chatMessages.scrollTop = chatMessages.scrollHeight;

}