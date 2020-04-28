import React from 'react';
import '../App.css';

const NewGame = (props) => {
  return (
    <input type='submit' value='New Game' onClick={props.handleNewGame} />
  )
}

export default NewGame;