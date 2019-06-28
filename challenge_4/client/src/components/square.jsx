import React from 'react';


class Square extends React.Component { // technically doesn't need to be a stateful component
  constructor(props) {                  // due to generic rendering from parent class
    super(props);
    this.state = {
      isActive: false,
      x: 0,
      y: 0
    }
    this.togglePiece = this.togglePiece.bind(this);
  }

  componentDidMount() { // set board-coordinates for each square
    this.setState({
      x: this.props.x,
      y: this.props.y
    })
  }
  //find a way to activate a square, then transpose to dropping a piece
  togglePiece() {
    console.log(`Clicked on coordinates: ${this.state.x}, ${this.state.y}`);
    var bool = true;
    // update 6x7 matrix-array using dropPiece()
    this.props.dropPiece(this.state.x, this.state.y);
    this.setState({
      isActive: bool
    })
  }

  render() {
    return (
      <td onClick={this.togglePiece}>
        <div id={`square-${this.props.x}-${this.props.y}`}>

        </div>
      </td>
    )
  }
}

export default Square;