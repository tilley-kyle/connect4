import React from 'react';
import '../App.css';
import Tile from './Tile';

const BoardMaker = (props) => {
  const arr = [];
  for (let i = 0; i < 100; i += 1) {
    arr.push(i);
  }
  return (
    arr.map((val) => <Tile key={val} rowStart="0" colStart="0" place={val} handleClick={props.handleClick} piece={props.piece} />)
  );
};

export default BoardMaker;
