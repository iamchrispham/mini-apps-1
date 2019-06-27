import React from 'react';
import Table from './components/table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      euphoria: 'Alpha',
      symphonia: 'Beta',
      autophilia: 'Gamma',
      epistemophilia: 'Delta',
      fantasia: 'Episilon',
      kakorrhaphiophilia: 'Zeta',
      technophilia: 'Eta',

      redCheckerCount: 21,
      blackCheckerCount: 21,
      playerOneTurn: true,
      playerTwoTurn: false,
    }
  }

  componentDidMount() {
    console.log('Curr State:', this.state)
  }

  render () {
    return (
      <div>
        Howdy!  This is a connect 4 board!
        <Table props={this.props}/>
      </div>
    )
  }
}

export default App;