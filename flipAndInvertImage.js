/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let col = A[0].length;
  for(let i=0;i<A.length;i++) {
    let left = 0;
    let right = col - 1;
    while(left <= right) {
      let t = A[i][left] ^ 1;
      A[i][left] = A[i][right] ^ 1;
      A[i][right] = t;
      left++;
      right--;
    }
  }
  return A;
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])