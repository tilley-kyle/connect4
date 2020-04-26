import React from 'react';
import './App.css';
import BoardMaker from './BoardMaker.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      turn: 'R',
      board: [ [], [], [], [], [], [], [], [], [], [] ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001')
    .then( res => {
      res.json()
      .then( data => {
        console.log(data)
      })
    })
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
    if (rowCoord === 9 || this.state.board[rowCoord + 1][colCoord]) {
      if (!this.state.board[rowCoord][colCoord]) {
        let arr = this.state.board;
        arr[rowCoord][colCoord] = this.state.turn;
        if (this.state.turn === 'R') {
          this.setState({ turn: 'B' })
        } else {
          this.setState({ turn: 'R' });
        }
        this.setState({ board: arr });
      }
    }
  }

  render() {
    return (
      <div className="App-header">
        <h1 className="Title">Connect4</h1>
        <div className="Board"><BoardMaker handleClick={this.handleClick} piece={this.state.board} /></div>
      </div>
    )
  }
}

export default App;
