import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Tile = ({ place, handleClick, piece }) => {
  let rowCoord;
  let colCoord;
  if (place < 10) {
    rowCoord = 0;
    colCoord = place;
  } else if (place > 9) {
    const string = place.toString();
    rowCoord = Number.parseInt(string[0]);
    colCoord = Number.parseInt(string[1]);
  }

  return (
    <div className="Tile" onClick={() => handleClick(place)} >{piece[rowCoord][colCoord]}</div>
  );
};

Tile.propTypes = {
  place: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  piece: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Tile;
