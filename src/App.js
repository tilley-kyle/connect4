import React from 'react';
import './App.css';
import Board from './Board.jsx';


class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="Board"><Board /></div>
      </div>
      )}
}

export default App;
