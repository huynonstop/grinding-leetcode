/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] += Math.min(
        matrix[i - 1][j],
        matrix[i - 1][Math.max(0, j - 1)],
        matrix[i - 1][Math.min(matrix.length - 1, j + 1)]
      );
    }
  }
  return Math.min(...matrix[matrix.length - 1]);
};

minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])