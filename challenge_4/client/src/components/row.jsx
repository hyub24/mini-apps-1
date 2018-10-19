import React from 'react';
import Square from './square.jsx';


class Row extends React.Component {
  constructor(props) {
    super()

  }

  renderRow() {
    var rowArr = [];
    for(var i = 0; i<7; i++) {
      rowArr.push(<Square x={i}  turn={this.props.turn} changeTurn={this.props.changeTurn} />);
    }
    return rowArr;
  }

  render() {
    return(
      <div>
        {this.renderRow()}
      </div>
    )
  }
}

export default Row;