import React from 'react';
import './App.css';
import Tile from './Tile.jsx';

const BoardMaker = (props) => {
  let arr = [];
  for (let i = 0; i < 100; i++ ){
    arr.push(i);
  };
  return (
    arr.map( (val) => {
      let rowCount = 1;
      let colCount = 1;
      <Tile rowStart={rowCount} colStart={colCount} />
    })
  )



}

export default BoardMaker;