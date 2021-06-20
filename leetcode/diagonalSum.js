/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let l = 0;
  let r = mat.length - 1;
  let i = 0;
  let s = 0;
  while(i < mat.length) {
    s += mat[i][l] +( l !== r ? mat[i][r] : 0);
    l++;
    r--;
    i++;
  }
  return s;
};

diagonalSum([[1,2,3],[4,5,6],[7,8,9]])