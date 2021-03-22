/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let diagonals = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (!diagonals[i - j]) diagonals[i - j] = [];
      diagonals[i - j].push(mat[i][j]);
    }

  for (let diagonal in diagonals) {
    diagonals[diagonal].sort((a, b) => b - a);
  }

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (diagonals[i - j]) {
        mat[i][j] = diagonals[i - j].pop();
      }
    }
  return mat;
};
diagonalSort([
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]);
