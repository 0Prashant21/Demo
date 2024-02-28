document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function handleCellClick(index) {
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            cells[index].innerText = currentPlayer;
            
            if (checkWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
            } else if (checkTie()) {
                alert('It\'s a tie!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern =>
            gameBoard[pattern[0]] !== '' &&
            gameBoard[pattern[0]] === gameBoard[pattern[1]] &&
            gameBoard[pattern[1]] === gameBoard[pattern[2]]
        );
    }

    function checkTie() {
        return gameBoard.every(cell => cell !== '');
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;

        cells.forEach(cell => {
            cell.innerText = '';
        });
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
});
