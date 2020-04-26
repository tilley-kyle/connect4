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
      // let rowCount = 0;
      // let colCount = -1;

      return (
      <Tile key={val} rowStart='0' colStart='0' place={val} handleClick={props.handleClick} piece={props.piece}/>
      )
    })
  )



}

export default BoardMaker;