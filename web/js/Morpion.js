let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = "X";

function MakeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;

        displayBoard();

        if (checkWin(currentPlayer)) { 
            alert('Le joueur ' + currentPlayer + ' a gagné !');
            resetGame();
            return;
        }

        if (checkDraw()) {
            alert('Match nul !');
            resetGame();
            return;
        }

        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    }
}

function checkWin(player){
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
            return true;
        }
    }
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
            return true;
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}


function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function displayBoard() {
    let boardContainer = document.querySelector("#board");
    boardContainer.innerHTML = '';
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            cell.textContent = board[row][col];

            cell.addEventListener("click", function() {
                MakeMove(row, col);
         });

            boardContainer.appendChild(cell);
        }
    }
}
function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    displayBoard();
}

displayBoard();