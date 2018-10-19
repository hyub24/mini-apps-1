import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    event.preventDefault();
    var col = document.getElementsByClassName(`${this.props.x}`);

    for(var i = col.length - 1; i >= 0; i--) {
      if(col[i].className.includes('emptySquare')) {
        if(this.props.turn === 'red') {
          col[i].className = 'redSquare';
          this.props.changeTurn();
        }
        if(this.props.turn === 'black') {
          col[i].className = 'blackSquare';
          this.props.changeTurn();
        }
        return;
      }
    }
  }

  render() {
    return (<button id="emptySquare" className={`${this.props.x} emptySquare`} onClick={this.handleClick} />);   
  }
}

export default Square;
