/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  for (let i = 0; i < mat.length; i++) {
    let l = 0,
      r = mat[0].length - 1;
    while (l !== r) {
      let mid = (l + r) >> 1;
      if (mat[i][mid] > mat[i][mid + 1]) r = mid;
      else l = mid + 1;
    }
    let top = i === 0 || mat[i][l] > mat[i - 1][l];
    let bot = i === mat.length - 1 || mat[i][l] > mat[i + 1][l];
    if (top && bot) return [i, l];
  }
  return [-1, -1];
};
var findPeakGrid = function (mat) {
  let n = mat.length;
  let low = 0;
  let high = n - 1;
  let max = 0;
  while (low < high) {
    let mid = (low + high) >> 1;
    max = mat[mid].indexOf(Math.max(...mat[mid]));
    if (mat[mid][max] < mat[mid + 1][max]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return [low, max];
};

findPeakGrid([
  [1, 4],
  [3, 2],
]);
