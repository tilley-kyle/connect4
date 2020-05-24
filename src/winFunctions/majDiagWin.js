const majDiagWin = (board, coords, turn) => {
  const y = coords[0];
  const x = coords[1];
  const majorDiag = [];
  let counter = 0;
  const counterTurn = (turn === 'R') ? 'B' : 'R';
  for (let i = -3; i <= 3; i += 1) {
    if ((x + i < 0 || x + i > 9) || (y + i < 0 || y + i > 9)) continue;
    majorDiag.push(board[y + i][x + i]);
  }
  for (let k = 0; k < majorDiag.length; k ++) {
    if (majorDiag[k] === turn) counter += 1;
    if (majorDiag[k] === counterTurn) counter = 0;
    if (counter === 4) return turn;
  }
  console.log('major', majorDiag)
  return null;
}

module.exports = majDiagWin;