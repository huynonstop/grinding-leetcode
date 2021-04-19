/**
 * @param {number[][]} matrix
 * @return {number}
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/643429/Python-DP-Solution-%2B-Thinking-Process-Diagrams-(O(mn)-runtime-O(1)-space)
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/441620/DP-with-figure-explanation
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/643380/Java-3-Lines-algorithm-solution-%2B-easy-explanation!-O(N*M)-DP
 */
var countSquares = function (matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  let count = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c]) {
        if (r === 0 || c === 0) {
          count++;
        } else {
          const val =
            Math.min(matrix[r - 1][c - 1], matrix[r][c - 1], matrix[r - 1][c]) +
            matrix[r][c];
          count += val;
          matrix[r][c] = val;
        }
      }
    }
  }
  return count;
};
countSquares([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]);
