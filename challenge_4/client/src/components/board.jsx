import React from 'react';
import Row from './row.jsx';

const Board = ( props ) => {
  if (!props.board) { // in-case component tries to render before data is fetched
    return null;
  } else {
    var { board } = props; // upon re-render
  }
  return ( // HTML STARTS HERE
    <div>
      <table className="blueTable">
        <tbody>
          {board.map((row, i) => {
            return (
              <Row row={row} y={i} dropPiece={props.dropPiece}/>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}


export default Board;