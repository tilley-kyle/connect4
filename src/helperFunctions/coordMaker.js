const coordMaker = (num) => {
  let rowCoord;
  let colCoord;
  if (num < 10) {
    rowCoord = 0;
    colCoord = num;
  } else if (num > 9) {
    const string = num.toString();
    rowCoord = Number.parseInt(string[0]);
    colCoord = Number.parseInt(string[1]);
  }
  return [rowCoord, colCoord];
};

module.exports = coordMaker;