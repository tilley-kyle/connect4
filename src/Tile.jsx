import React from 'react';
import './App.css';

const Tile = (props) => {
  const divStyle ={
    "gridRowStart": `2`,
    "gridColumnStart": `3`
  }
  console.log(props.rowStart, props.colStart)
  return (
    <div className="Tile" style={divStyle}><p>hi</p></div>
  )
}

export default Tile;