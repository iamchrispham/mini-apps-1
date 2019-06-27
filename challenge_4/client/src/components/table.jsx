import React from 'react';
import Row from './row.jsx';

const Table = (props) => {
  return (
    <div>
      <table className="blueTable">
        <tbody>
        <Row props={props}/>
        <Row props={props}/>
        <Row props={props}/>
        <Row props={props}/>
        <Row props={props}/>
        <Row props={props}/>
        </tbody>
      </table>
    </div>
  )
}

export default Table;