const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function callback (input) {
  console.log('You chose ' + input)
  rl.close()
}

function getInput() {
  rl.question("Choose a sq 1 - 9", callback)
}
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function printBoard() {
  console.log(board[0] + "|" + board[1] + "|" + board[2]);
  console.log(board[3] + "|" + board[4] + "|" + board[5]);
  console.log(board[6] + "|" + board[7] + "|" + board[8]);
}

// getInput()

printBoard()