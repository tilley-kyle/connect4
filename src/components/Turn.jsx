import React from 'react';
import '../App.css';

const Turn = ({ turn }) => {
  const turnColor = (turn === 'R') ? 'Red' : 'Blue';
  return (
    <div className={turnColor}>
      It's {turnColor}'s Turn
    </div>
  )};

// Turn.propTypes = {
//   turn: PropTypes.string.isRequired,
// };
export default Turn;
