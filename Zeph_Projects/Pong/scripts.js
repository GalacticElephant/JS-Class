<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
            margin: 20px auto;
        }
        .cell {
            width: 100px;
            height: 100px;
            font-size: 24px;
            text-align: center;
            vertical-align: middle;
            background-color: #f0f0f0;
            cursor: pointer;
        }
        .cell:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <div id="message"></div>
    <div class="board" id="board"></div>
    <script>
        const board = document.getElementById('board');
        const message = document.getElementById('message');
        let currentPlayer = 'X';
        const cells = [];

        // Create the Tic-Tac-Toe board
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            board.appendChild(cell);
            cells.push(cell);

            cell.addEventListener('click', () => makeMove(i));
        }

        // Function to make a move
        function makeMove(index) {
            if (!cells[index].textContent) {
                cells[index].textContent = currentPlayer;
                cells[index].style.pointerEvents = 'none';

                if (checkWin()) {
                    message.textContent = `${currentPlayer} wins!`;
                } else if (isBoardFull()) {
                    message.textContent = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        // Function to check for a win
        function checkWin() {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    return true;
                }
            }

            return false;
        }

        // Function to check if the board is full
        function isBoardFull() {
            return cells.every(cell => cell.textContent);
        }
    </script>
</body>
</html>
