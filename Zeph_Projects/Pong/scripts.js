// Get canvas element and 2d drawing context
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Define game variables
const paddleWidth = 10;
const paddleHeight = 100;
let paddle1Y = canvas.height / 2 - paddleHeight / 2;
let paddle2Y = canvas.height / 2 - paddleHeight / 2;
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
const paddleSpeed = 10;

// Define functions to draw game elements
function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    context.fillStyle = '#fa7659';
    context.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
    context.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);

    // Draw ball
    context.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);

    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballY < 0 || ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        (ballX < paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) ||
        (ballX > canvas.width - paddleWidth && ballY > paddle2Y && ballY < paddle2Y + paddleHeight)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds
    if (ballX < 0 || ballX > canvas.width) {
        // Reset ball position
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        // Reverse ball direction
        ballSpeedX = -ballSpeedX;
    }
}

// Update game at a fixed interval (60 FPS)
setInterval(draw, 1000 / 60);

// Handle user input
window.addEventListener('mousemove', function (event) {
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;
    paddle1Y = mouseY - paddleHeight / 2;
});

function computerMovement() {
    const paddle2YCenter = paddle2Y + paddleHeight / 2;
    if (paddle2YCenter < ballY - 35) {
        paddle2Y += paddleSpeed;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= paddleSpeed;
    }
}

// Update game at a fixed interval (60 FPS)
setInterval(function () {
    draw();
    computerMovement(); // Add computer-controlled paddle movement
}, 1000 / 60);