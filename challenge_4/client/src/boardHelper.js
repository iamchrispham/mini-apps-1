/*
Y(row)
0: (7) [0, 0, 0, 0, 0, 0, 0]  
1: (7) [0, 0, 0, 0, 0, 0, 0]
2: (7) [0, 0, 0, 0, 0, 0, 0]
3: (7) [0, 1, 0, 0, 0, 0, 0] (3, 1)
4: (7) [0, 0, 0, 0, 0, 0, 0]
5: (7) [0, 0, 0, 0, 0, 0, 0]
                 X (column)
*/


var searchCol = (board, x, y, currentMove) => {
  console.log(`searchCol: (col:) ${x}, (row:)  ${y}`);
  console.log('searchCol(board)', board);
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

var togglePlayer = (currentMove) => {
  return currentMove === 1 ? 2 : 1;
}

var isValidCoordinates = (x, y) => {
  if ((x >= 0 && x < 7) && (y >= 0 && y < 6)) {// check if out of bounds
    return true;
  }
  return false;
}

var checkWinner = (board) => { // board obj withboard and x,y coordinates
  var x = board['x'];
  var y = board['y'];
  console.log('Inside CWfxn:', board.board);
  return;
}

export {
  searchCol,
  togglePlayer,
  isValidCoordinates,
  checkWinner
}