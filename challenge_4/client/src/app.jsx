import React from 'react';
import Board from './components/board.jsx';
import BoardMaker from './boardMaker.js';

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
      board: []
    }
  }

  componentDidMount() {
    var board = new BoardMaker();
    this.setState({
      board: board
    });
  }

  render() {
    return (
      <div>
        Howdy!  This is a connect 4 board!
        <Board newBoard={this.state.board} />
      </div>
    )
  }
}

export default App;