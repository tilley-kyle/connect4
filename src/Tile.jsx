import React from 'react';
import './App.css';

const Tile = (props) => {
  const divStyle ={
    "gridRowStart": `${props.rowStart}`,
    "gridColumnStart": `${props.colStart}`
  }
  console.log(props.rowStart, props.colStart)
  return (
    <div className="Tile" style={divStyle} onClick={props.handleClick}><p>hi</p></div>
  )
}

export default Tile;