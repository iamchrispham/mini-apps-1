/*
Y(row)
0: (7) [0, 0, 0, 0, 0, 0, 0]  
1: (7) [0, 0, 0, 0, 0, 0, 0]
2: (7) [0, 0, 0, 0, 0, 0, 0]
3: (7) [0, 0, 0, 0, 0, 0, 0] 
4: (7) [0, 0, 0, 0, 0, 0, 0]
5: (7) [0, 0, 0, 1, 1, 1, 1]
                 X (column)
*/


var updateBoard = (board, x, y, currentMove) => {
  // console.log(`searchCol: (col:) ${x}, (row:)  ${y}`);
  // console.log('searchCol(board)', board);
  for (var row = board.length - 1; row >= 0; row--) {
    if (board[row][x] === 0) { // if player makes a move on empty spot
      board[row][x] = currentMove;
      return {
        board: board,
        x: x,
        y: row
      };
    }
  }
}

var togglePlayer = (currentMove) => { // could technically toggle other player in updateBoard via state, but meh
  return currentMove === 1 ? 2 : 1;
}

var isValidCoordinates = (x, y) => { // redundant function, but meh
  if ((x >= 0 && x < 7) && (y >= 0 && y < 6)) {// check if out of bounds
    return true;
  }
  return false;
}

var checkWinner = (board, currentMove) => { // board obj withboard and x,y coordinates
  var col = board['x'];
  var row = board['y'];

  return checkVertical(board, col, currentMove) || checkHorizontal(board, row, currentMove);
}

var checkVertical = (board, col, currentMove) => {
  var { board } = board;
  var count = 1; // default by one, as piece has just been placed
  var row = 0;
  while (row < board.length) {
    if (board[row][col] !== currentMove) {
      count = 1;
    } else {
      if (count === 4) {
        return true;
      }
      count++;
    }
    row++;
  }
  return false;
}

var checkMajorDiagonal = (board, row, col, currentMove) => {
  var { board } = board;
  var offset = col - row;
  return false;
}

var checkMinorDiagonal = (board, row, col, currentMove) => {
  var { board } = board;
  var offset = row + col;
  return false;
}

var checkHorizontal = (board, row, currentMove) => {
  var { board } = board;
  var count = 1;
  var col = 0;

  while (col < board[row].length) { // search through entire row
    if (board[row][col] !== currentMove) { // if x,y coordinate is not current player's piece
      count = 1; // reset count 1
    } else {
      if (count === 4) { // if it is their piece and count is 4
        return true; // return true, they won horizontally
      }
      count++;
    }
    col++; // sentinel val
  }
  return false;
}

export {
  updateBoard,
  togglePlayer,
  isValidCoordinates,
  checkWinner
}