/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        count++;
        fill(board, i, j);
      }
    }
  }
  return count;
};

const fill = (board, i, j) => {
  board[i][j] = '.';
  if (board[i + 1] && board[i + 1][j] === 'X') {
    fill(board, i + 1, j);
    return;
  }
  if (board[i] && board[i][j + 1] === 'X') {
    fill(board, i, j + 1);
    return;
  }
};

var countBattleships = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        (i === 0 || board[i - 1][j] !== 'X') &&
        board[i][j - 1] !== 'X' &&
        board[i][j] === 'X'
      ) {
        count++;
      }
    }
  }
  return count;
};
