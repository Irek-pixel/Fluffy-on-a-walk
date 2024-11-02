// Select the canvas and get the context for drawing
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Character setup
const player = {
    x: canvas.width / 2 - 16, // Center the player horizontally
    y: canvas.height - 64,    // Position player near the bottom of the canvas
    width: 32,
    height: 32,
    speed: 5,
    isPeeing: false
};

// Load player character image (replace with the Maltipoo image path)
const playerImage = new Image();
playerImage.src = "Fluffy-on-a-walk/multipoo.webp"; // Replace with actual image path

// Handle keyboard input
const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.code] = true;
    if (e.code === "Space") {
        player.isPeeing = true;
        console.log("Peeing"); // Display message for now
    }
});

window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
    if (e.code === "Space") {
        player.isPeeing = false;
    }
});

// Update player position based on input
function updatePlayer() {
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
}

// Draw the player on the canvas
function drawPlayer() {
    if (player.isPeeing) {
        // Optionally add visual effects here, e.g., a puddle image
        ctx.fillStyle = "rgba(255, 255, 0, 0.6)"; // Yellow overlay for peeing
        ctx.fillRect(player.x, player.y + player.height - 10, player.width, 5);
    }
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    updatePlayer();    // Update player based on input
    drawPlayer();      // Draw player on canvas
    requestAnimationFrame(gameLoop); // Repeat the loop
}

// Start the game loop
gameLoop();
