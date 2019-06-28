import React from 'react';


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      x: 0,
      y: 0
    }
    this.togglePiece = this.togglePiece.bind(this);
    this.showPiece = this.showPiece.bind(this);
  }

  componentDidMount() { // set board-coordinates for each square
    this.setState({
      x: this.props.x,
      y: this.props.y
    })
  }
  //find a way to activate a square, then transpose to dropping a piece
  togglePiece() {
    // console.log(`Square at coordinate (${this.state.x}, ${this.state.y})`);
    console.log(`Attempting to toggle at coordinates: ${this.state.x}, ${this.state.y}`);
    var bool = !this.state.isActive;

    this.setState({
      isActive: bool
    })
  }

  showPiece() {
    return (
      <font size="20pt">O</font>
    )
  }

  render() {
    return (
      <td onClick={this.togglePiece}>
        <div id={`square-${this.props.x}-${this.props.y}`}>
          {this.state.isActive ? this.showPiece() : null}
        </div>
      </td>
    )
  }
}

export default Square;