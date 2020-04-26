import React from 'react';
import './App.css';
import BoardMaker from './BoardMaker.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      turn: 'R',
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(coords) {
    let rowCoord, colCoord;
    if (coords < 10) {
      rowCoord = 0;
      colCoord = coords;
    } else if (coords > 9) {
      let string = coords.toString();
      rowCoord = Number.parseInt(string[0]);
      colCoord = Number.parseInt(string[1]);
    }
    if (this.state.board[rowCoord][colCoord] === 0) {
      let arr = this.state.board;
      arr[rowCoord][colCoord] = this.state.turn;
      if (this.state.turn === 'R') {
         this.setState({turn: 'B'})
       } else {
         this.setState({turn: 'R'});
       }
      this.setState({board: arr});

    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="Board"><BoardMaker handleClick={this.handleClick} /></div>
      </div>
    )
  }
}

export default App;
