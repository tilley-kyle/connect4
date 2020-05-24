const majDiagWin = (board, coords, turn) => {
  const y = coords[0];
  const x = coords[1];
  const majorDiag = [];
  const counterTurn = (turn === 'R') ? 'B' : 'R';
  for (let i = -3; i <= 3; i += 1) {
    if ((x + i < 0 || x + i > 9) || (y + i < 0 || y + i > 9)) continue;
    console.log(y + i, '  ', x + i)
      console.log('here')
    majorDiag.push(board[y + i][x + i]);

  }

  console.log('major', majorDiag)
}

module.exports = majDiagWin;