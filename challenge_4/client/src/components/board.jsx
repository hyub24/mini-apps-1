import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      turn: 'red'
    }
    this.changeTurn = this.changeTurn.bind(this);

  }

  changeTurn() {
    if(this.state.turn === 'red') {
      this.setState({
        turn: 'black'
      })
    } else {
      this.setState({
        turn: 'red'
      })
    }   
  }

  renderBoard() {
    var boardArr = [];
    for(var i = 0; i<6; i++) {
      boardArr.push(<Row turn={this.state.turn} changeTurn={this.changeTurn} />)
    }
    return boardArr;
  }
  
  render() {
    return(
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}

export default Board;