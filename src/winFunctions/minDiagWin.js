const minDiagWin = (board, coords, turn) => {
  const y = coords[0];
  const x = coords[1];
  const minorDiag = [];
  let counter = 0;
  const counterTurn = (turn === 'R') ? 'B' : 'R';
  for (let i = -3; i <= 3; i += 1) {
    if ((x + i < 0 || x + i > 9) || (y - i < 0 || y - i > 9)) continue;
    minorDiag.push(board[y - i][x + i]);
  }
  for (let k = 0; k < minorDiag.length; k ++) {
    if (minorDiag[k] === turn) counter += 1;
    if (minorDiag[k] === counterTurn) counter = 0;
    if (counter === 4) return turn;
  }
  console.log('minor', minorDiag)
  return null;
}

module.exports = minDiagWin;