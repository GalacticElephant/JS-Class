const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;
const playerSpeed = 10;
const computerSpeed = 5;

const player = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "blue",
  dy: 0,
};

const computer = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "red",
  dy: 0,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: ballSize,
  speed: 5,
  dx: 5,
  dy: 5,
  color: "white",
};

let humanScore = 0;
let cpuScore = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && player.y > 0) {
    player.dy = -playerSpeed;
  } else if (event.key === "ArrowDown" && player.y + player.height < canvas.height) {
    player.dy = playerSpeed;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    player.dy = 0;
  }
});

function update() {
  player.y += player.dy;

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.dy *= -1;
  }

  if (
    ball.x - ball.radius < player.x + player.width &&
    ball.x + ball.radius > player.x &&
    ball.y > player.y &&
    ball.y < player.y + player.height
  ) {
    ball.dx *= -1;
  } else if (
    ball.x - ball.radius < computer.x + computer.width &&
    ball.x + ball.radius > computer.x &&
    ball.y > computer.y &&
    ball.y < computer.y + computer.height
  ) {
    ball.dx *= -1;
  }

  if (ball.x - ball.radius < 0) {
    cpuScore++;
    resetBall();
  } else if (ball.x + ball.radius > canvas.width) {
    humanScore++;
    resetBall();
  }
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx = Math.sign(ball.dx) * 5;
  ball.dy = Math.sign(ball.dy) * 5;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.width, player.height);

  context.fillStyle = computer.color;
  context.fillRect(computer.x, computer.y, computer.width, computer.height);

  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();

  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("cpuScore").textContent = cpuScore;
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
