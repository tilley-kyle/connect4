import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ScoreBoard = ({ totalWins }) => (

  <div className="score-board">
    <div className="scores">Overall Score</div>
    <span className="red-wins">{totalWins.R}</span>
    <span className="yellow-wins">{totalWins.Y}</span>
  </div>
);

ScoreBoard.propTypes = {
  totalWins: PropTypes.shape({
    R: PropTypes.string.isRequired,
    Y: PropTypes.string.isRequired,
  }).isRequired,
};

export default ScoreBoard;
