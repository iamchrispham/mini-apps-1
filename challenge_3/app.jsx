import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const board = (
      <table border="1px" width="400px">
        <tr>
          <td>x</td>
          <td>o</td>
          <td>x</td>
        </tr>
        <tr>
          <td>o</td>
          <td>x</td>
          <td>o</td>
        </tr>
        <tr>
          <td>x</td>
          <td>o</td>
          <td>x</td>
        </tr>
      </table>
    );
    ReactDOM.render(board, documentGetElementById('tic-tac-toe-table'));
  }

  App();