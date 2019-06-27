import React from 'react';
import Square from './square.jsx';

const Row = (props) => {
  return (
    <tr id="row">
      <Square props={props}/>
      <Square props={props}/>
      <Square props={props}/>
      <Square props={props}/>
      <Square props={props}/>
      <Square props={props}/>
      <Square props={props}/>
    </tr>
  )
}

export default Row;