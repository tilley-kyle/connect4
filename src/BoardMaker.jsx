import React from 'react';
import './App.css';
import Tile from './Tile.jsx';

const BoardMaker = (props) => {
  for(let i = 1; i< 11; i++) {
    for (let k = 1; k < 11; k++) {
      let rowStart = i;
      let colStart = k;
      return <Tile  rowStart={rowStart} colStart={colStart} />
    }
  }

}

export default BoardMaker;