document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
    const gridSize = 15;
    const boardSize = gridSize * gridSize;
    const snakeSpeed = 200; // milliseconds

    let snakeX = 7;
    let snakeY = 7;
    let snakeDirection = 'right';

    function createFood() {
        const foodX = Math.floor(Math.random() * gridSize);
        const foodY = Math.floor(Math.random() * gridSize);
        food.style.gridColumn = foodX + 1;
        food.style.gridRow = foodY + 1;
    }

    function updateSnake() {
        switch (snakeDirection) {
            case 'up':
                snakeY--;
                break;
            case 'down':
                snakeY++;
                break;
            case 'left':
                snakeX--;
                break;
            case 'right':
                snakeX++;
                break;
        }

        if (snakeX < 0 || snakeX >= gridSize || snakeY < 0 || snakeY >= gridSize) {
            alert('Game over!');
            location.reload();
        }

        snake.style.gridColumn = snakeX + 1;
        snake.style.gridRow = snakeY + 1;

        if (snakeX === parseInt(food.style.gridColumn) - 1 && snakeY === parseInt(food.style.gridRow) - 1) {
            createFood();
        }
    }

    function changeDirection(event) {
        switch (event.key) {
            case 'ArrowUp':
                if (snakeDirection !== 'down') snakeDirection = 'up';
                break;
            case 'ArrowDown':
                if (snakeDirection !== 'up') snakeDirection = 'down';
                break;
            case 'ArrowLeft':
                if (snakeDirection !== 'right') snakeDirection = 'left';
                break;
            case 'ArrowRight':
                if (snakeDirection !== 'left') snakeDirection = 'right';
                break;
        }
    }

    createFood();
    updateSnake();
    document.addEventListener('keydown', changeDirection);

    setInterval(() => {
        updateSnake();
    }, snakeSpeed);
});
