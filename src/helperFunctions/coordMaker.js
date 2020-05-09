//input: num
//output: arr
//const: NA
//edgecases: na

const coordMaker = (num) => {
  let rowCoord, colCoord;
    if (num < 10) {
      rowCoord = 0;
      colCoord = num;
    } else if (num > 9) {
      let string = num.toString();
      rowCoord = Number.parseInt(string[0]);
      colCoord = Number.parseInt(string[1]);
    }
    return [rowCoord, colCoord];
}

module.exports = coordMaker;