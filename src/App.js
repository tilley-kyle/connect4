import React from 'react';
import './App.css';
import axios from 'axios';
import BoardMaker from './components/BoardMaker';
import NewGame from './components/NewGame';
import Turn from './components/Turn';
import ScoreBoard from './components/ScoreBoard';

const coordMaker = require('./helperFunctions/coordMaker.js');
const vertWin = require('./winFunctions/vertWin.js');
const horWin = require('./winFunctions/horWin.js');
const majDiagWin = require('./winFunctions/majDiagWin.js');
const minDiagWin = require('./winFunctions/minDiagWin.js');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWins: {},
      turn: 'R',
      gameOver: false,
      board: [[], [], [], [], [], [], [], [], [], []],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3001/get-wins')
      .then((data) => {
        this.setState({
          totalWins: {
            id: 1,
            R: data.data.redWins,
            B: data.data.blueWins,
          },
        });
      });
  }

  handleClick(e) {
    const {
      board,
      turn,
      gameOver,
      totalWins,
    } = this.state;
    const coords = coordMaker(e);
    if (gameOver) return null;
    if (coords[0] === 9 || board[coords[0] + 1][coords[1]]) {
      if (!board[coords[0]][coords[1]]) {
        const arr = board;
        arr[coords[0]][coords[1]] = turn;
        this.setState({ turn: (turn === 'R') ? 'Y' : 'R' });
        this.setState({ board: arr });
      }
    }
    if (vertWin(board, coords, turn)
      || horWin(board, coords, turn)
      || majDiagWin(board, coords, turn)
      || minDiagWin(board, coords, turn)) {
      this.setState({ gameOver: true });
      alert(`${turn} wins!`);
      const newTotalWins = totalWins;
      newTotalWins[turn] += 1;
      this.setState({ totalWins: newTotalWins }, () => {
        axios.put('http://127.0.0.1:3001/update-wins', totalWins);
      });
    }
    return null;
  }

  handleNewGame() {
    this.setState({ board: [[], [], [], [], [], [], [], [], [], []], gameOver: false });
  }


  render() {
    const { board, turn, totalWins } = this.state;
    return (
      <div className="App">
        <div className="title-box">
          <ScoreBoard totalWins={totalWins} />
          <h1 className="Title">Connect4</h1>
          <Turn turn={turn} />
        </div>
        <div className="Board"><BoardMaker handleClick={this.handleClick} piece={board} /></div>
        <NewGame handleNewGame={this.handleNewGame} />
      </div>
    );
  }
}

export default App;
