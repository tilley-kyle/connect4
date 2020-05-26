import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const NewGame = ({ handleNewGame }) => {
  return (
    <input type="submit" value="New Game" onClick={handleNewGame} />
  );
};

NewGame.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default NewGame;
