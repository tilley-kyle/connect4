import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Turn = ({ turn }) => {
  const turnColor = (turn === 'R') ? 'Red' : 'Blue';
  const sentence = `It's ${turnColor}'s Turn`;
  return (
    <div className={turnColor}>
      {sentence}
    </div>
  );
};

Turn.propTypes = {
  turn: PropTypes.string.isRequired,
};
export default Turn;
