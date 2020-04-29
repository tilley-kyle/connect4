import React from 'react';
import '../App.css';

const Tile = (props) => {
  // const divStyle ={
  //   "gridRowStart": `${props.rowStart}`,
  //   "gridColumnStart": `${props.colStart}`
  // }
  let rowCoord, colCoord;
  if (props.place < 10) {
    rowCoord = 0;
    colCoord = props.place;
  } else if (props.place > 9) {
    let string = props.place.toString();
    rowCoord = Number.parseInt(string[0]);
    colCoord = Number.parseInt(string[1]);
  }

  return (
    <div className="Tile"  onClick={() => props.handleClick(props.place)} >{props.piece[rowCoord][colCoord]}</div>
  )
}

export default Tile;