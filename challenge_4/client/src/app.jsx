import React from 'react';
import { render } from 'react-dom';
import Board from './components/board.jsx';
import { updateBoard, togglePlayer, isValidCoordinates, checkWinner } from './boardHelper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // euphoria: 'Alpha',
      // symphonia: 'Beta',
      // autophilia: 'Gamma',
      // epistemophilia: 'Delta',
      // fantasia: 'Episilon',
      // kakorrhaphiophilia: 'Zeta',
      // technophilia: 'Eta',
      board: [],
      currentMove: 1, // cycle between 1 and 2 for player 1 and 2
      x: 0,
      y: 0
    }
    this.createBoard = this.createBoard.bind(this);
    this.dropPiece = this.dropPiece.bind(this);
  }

  componentDidMount() {
    var board = this.createBoard();
    this.setState({
      board: board
    });
  }

  createBoard() { // prototype to create a board
    var boardArray = [];
    for (var row = 0; row < 6; row++) {
      boardArray[row] = [];
      for (var col = 0; col < 7; col++) {
        boardArray[row][col] = 0;
      }
    }
    return boardArray;
  }

  dropPiece(x, y) {
    if (isValidCoordinates(x, y)) {
      var { currentMove } = this.state;
      var board = updateBoard(this.state.board, x, y, currentMove); // should return object with board and x,y found
      var currImg = '';
      if (board !== undefined) {
        // console.log('BOARD AFTER UPDATEBOARD', board);
        console.log('Checking for win:', checkWinner(board, currentMove));
        currentMove = togglePlayer(currentMove); // turn-change

        this.setState({
          board: board['board'],
          currentMove: currentMove,
          x: board['x'],
          y: board['y']
        })

        if(currentMove === 1) {
          currImg = 'X';
        } else {
          currImg = 'O';
        }
        render(currImg, document.getElementById(`square-${board['x']}-${board['y']}`));
      }
    }
    return;
  }


  render() {
    return (
      <div>
        Howdy!  This is a connect 4 board!
        <Board board={this.state.board} dropPiece={this.dropPiece} />
      </div>
    )
  }
}

export default App;