import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  togglePiece() {
    this.setState({
      isActive: !isActive
    })
  }

  render() {
    return (
      <td>
        <div id="square">

        </div>
      </td>
    )
  }
}

export default Square;