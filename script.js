// script.js

// Fetch Telegram token from window.Telegram.WebApp.initData
function displayTelegramToken() {
  try {
    // Ensure Telegram WebApp object exists
    if (!window.Telegram || !window.Telegram.WebApp) {
      throw new Error("Telegram WebApp object not found.");
    }

    // Get the initData from Telegram WebApp
    const token = window.Telegram.WebApp.initData;

    // Display the token in the input field
    const tokenInput = document.getElementById("tokenInput");
    tokenInput.value = token || "";

    // Handle case where token is missing
    if (!token) {
      showNoTokenMessage();
    }
  } catch (error) {
    console.error("Error retrieving Telegram token:", error);
    showNoTokenMessage();
  }
}

// Show the message when no token is found
function showNoTokenMessage() {
  document.getElementById("noTokenMessage").style.display = "block";
}

// Add a copy functionality for the token
document.getElementById("copyButton").addEventListener("click", function () {
  const tokenInput = document.getElementById("tokenInput");
  const tokenText = tokenInput.value;

  if (tokenText) {
    navigator.clipboard
      .writeText(tokenText)
      .then(() => {
        alert("Token copied to clipboard!");
      })
      .catch((error) => {
        alert("Failed to copy token.");
        console.error("Copy error:", error);
      });
  } else {
    alert("No valid token to copy.");
  }
});

// Initialize the display
displayTelegramToken();
