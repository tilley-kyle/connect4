import React from 'react';
import './App.css';
import BoardMaker from './components/BoardMaker.jsx';
import NewGame from './components/NewGame.jsx';

const vertWin = require('./winFunctions/vertWin.js');
const coordMaker = require('./helperFunctions/coordMaker.js');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      turn: 'R',
      winTotal: {redWins: 1, blueWins: 0},
      board: [ [], [], [], [], [], [], [], [], [], [] ],
      lastMove: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  componentDidMount() {
    // fetch('http://127.0.0.1:3001')
    // .then( res => {
    //   res.json()
    //   .then( data => {
    //     console.log(data)
    //   })
    // })
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({currWins: this.state.winTotal, winner: 'R'})
    }
    fetch('http://127.0.0.1:3001', options)
  }

  handleClick(e) {
    const { board, lastMove } = this.state;
    const coords = coordMaker(e);
    if (coords[0] === 9 || this.state.board[coords[0] + 1][coords[1]]) {
      if (!this.state.board[coords[0]][coords[1]]) {
        let arr = this.state.board;
        arr[coords[0]][coords[1]] = this.state.turn;
        if (this.state.turn === 'R') {
          this.setState({ turn: 'B' })
        } else {
          this.setState({ turn: 'R' });
        }
        this.setState({ board: arr });
      }
    }
    vertWin(board, lastMove);
  }

  handleNewGame() {
    this.setState({board: [ [], [], [], [], [], [], [], [], [], [] ]});
  }


  render() {
    return (
      <div className="App-header">
        <h1 className="Title">Connect4</h1>
        <div className="Board"><BoardMaker handleClick={this.handleClick} piece={this.state.board} /></div>
        <NewGame handleNewGame={this.handleNewGame} />
      </div>
    )
  }
}

export default App;
