/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let matrix = [];
  for (let i = 0; i < rowSum.length; i++) {
    matrix.push([]);
    for (let j = 0; j < colSum.length; j++) {
      let cur = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= cur;
      colSum[j] -= cur;
      matrix[i].push(cur);
    }
  }
  return matrix;
};
restoreMatrix([3, 8], [4, 7]);
