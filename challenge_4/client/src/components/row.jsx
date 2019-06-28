import React from 'react';
import Square from './square.jsx';

const Row = (props) => {
  if (!props.row) {
    return null;
  }
  return (
    <tr id={`row-${props.y}`}>
      {props.row.map((col, i) => {
        return (
          <Square x={i} y={props.y} dropPiece={props.dropPiece}/>
        )
      })}
    </tr>
  )
}

export default Row;