/* ticTacToe.js
Write a realization for the tic tac toe game for two - player and computer - with two modes:
--- easy mode: computer goes left to right and up to bottom in a search for an empty cell. When finding one, it draws 'o' there.
--- normal mode: computer goes left to right and bottom to up in a search for an empty cell. When finding one, it draws 'o' there.
! Don't overthink winner check, the task is not about finding the elegant solution but to practice classes.

Example of work:
// Default mode is 'easy'
const game = new TicTacToe();
// Player's turn: the arguments are a row and a column where to put an 'x'
game.go(1, 1);
// Computer's turn: arguments should be determined in the mode class
game.go();
// If after some move we have a winner, it should retrun true. Return false otherwise.
game.go(0, 1); // false
game.go(); // false
const isWinner = game.go(2, 1); // true
*/
/////////////////// MODES
class Easy {
  move(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (!board[i][j]) return [i, j];
      }
    }
  }
}
class Normal {
  move(board) {
    for (let i = 2; i >= 0; i--) {
      for (let j = 0; j < board[0].length; j++) {
        if (!board[i][j]) return [i, j];
      }
    }
  }
}

////////////////// GAME
class TicTacToe {
  constructor(difficulty = "easy") {
    this.mode = difficulty === "easy" ? new Easy() : new Normal();
    this.draw = "o";
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
  go(...args) {
    this.draw = this.draw === "x" ? "o" : "x";
    if (!args.length) args = this.mode.move(this.board);
    let [row, column] = args;
    this.board[row][column] = this.draw;

    return this.check(row, column) ? true : false;
  }
  check(row, column) {
    if (this.board[row].filter((item) => item === this.draw).length === 3)
      return true;
    let col = [];
    this.board.forEach((row) => col.push(row[column]));
    if (col.filter((item) => item === this.draw).length === 3) return true;
    let diagonal1 = [this.board[0][0], this.board[1][1], this.board[2][2]];
    if (diagonal1.filter((item) => item === this.draw).length === 3)
      return true;
    let diagonal2 = [this.board[0][2], this.board[1][1], this.board[2][0]];
    if (diagonal2.filter((item) => item === this.draw).length === 3)
      return true;
    return false;
  }
}
