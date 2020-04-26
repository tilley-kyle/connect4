import React from 'react';
import './App.css';
import BoardMaker from './BoardMaker.jsx';


class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="Board"><BoardMaker /></div>
      </div>
      )}
}

export default App;
