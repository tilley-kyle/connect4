const horWin = (board, coords, turn) => {
  const y = coords[0];
  const x = coords[1];
  const arrToCheck = [];
  const counterTurn = (turn === 'R') ? 'Y' : 'R';
  for (let i = -3; i <= 3; i += 1) {
    arrToCheck.push(board[y][x + i])
  }
  const left = arrToCheck.slice(0, 4);
  const right = arrToCheck.slice(3,7);
  if ((left.indexOf(counterTurn) > -1 || left.indexOf(undefined) > -1) &&
   (right.indexOf(counterTurn) > -1 || right.indexOf(undefined) > -1)) return null;
  return turn;
}

module.exports = horWin;