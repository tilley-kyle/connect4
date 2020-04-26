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
      let rowCount = 0;
      let colCount = 0;
      return (
      <Tile rowStart='0' colStart='0' handleClick={props.handleClick} />
      )
    })
  )



}

export default BoardMaker;