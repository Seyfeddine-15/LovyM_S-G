function showSurprise() {
    let container = document.querySelector(".container");
    
    // Hide the previous message box
    container.style.display = "none";

    // Create new surprise box
    let surpriseBox = document.createElement("div");
    surpriseBox.classList.add("surprise-box");
    surpriseBox.innerHTML = `
        🌸🌸🌸🌸🌸<br>You're the best thing that ever happened to me! 💕💕<br>🌸🌸🌸🌸🌸<br><br>
        🌺🌺🌺🌺🌺<br>Looooove u so much, Kisses to my Beauty 😘💋ྀིྀི🥰<br>🌺🌺🌺🌺🌺
    `;

    // Add the new message to the body
    document.body.appendChild(surpriseBox);
}
