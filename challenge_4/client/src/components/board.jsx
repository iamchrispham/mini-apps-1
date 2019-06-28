import React from 'react';
import Row from './row.jsx';

const Board = ({ newBoard }) => {
  if (!newBoard.board) { // in-case component tries to render before data is fetched
    return null;
  } else {
    var { board } = newBoard;
  }
  return ( // HTML STARTS HERE
    <div>
      <table className="blueTable">
        <tbody>
          {board.map((row, i) => {
            return (
              <Row row={row} y={i} />
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}


export default Board;