const vertWin = (board, coords, turn) => {
  const y = coords[0];
  const x = coords[1];
  const arrToCheck = [];
  const counterTurn = (turn === 'R') ? 'Y' : 'R';

  if (coords[0] > 6) return null;
  for (let i = 0; i <= 3; i += 1) {
    arrToCheck.push(board[y + i][x]);
  }
  if (arrToCheck.indexOf(counterTurn) > -1 || arrToCheck.indexOf(undefined) > -1) {
    return null;
  }
  return turn;
};

module.exports = vertWin;
