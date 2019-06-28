
let Board = function () {
  this.currentColor = 1; // black goes first
  this.empty = 0; // untouched square
  this.black = 1; // first player
  this.red = 2; // second player
  this.board = this.createBoard(); // will instantiate a board object
};

Board.prototype.createBoard = function () { // prototype to create a board
  var boardArray = [];
  for (var row = 0; row < 6; row++) {
    boardArray[row] = [];
    for (var col = 0; col < 7; col++) {
      boardArray[row][col] = this.empty;
    }
  }
  return boardArray;
}

Board.prototype.toggleTurn = function () {
  return this.currentColor === this.black ? this.currentColor = this.red : this.currentColor = black;
}



export default Board;

