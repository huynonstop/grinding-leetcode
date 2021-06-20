/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i][0]) {
      for (let j = 0; j < A[i].length; j++) {
        row[i][j] ^= 1;
      }
    }
  }

  let rs = 0;

  for (let i = 0; i < A[0].length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j][i]) {
        count++;
      }
    }
    rs += Math.max(count, A.length - count) * Math.pow(2, A[0].length - 1 - i);
  }

  return rs;
};

var matrixScore = function (A) {
  let rs = 0;

  for (let i = 0; i < A[0].length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      count += A[j][i] ^ A[j][0];
    }
    rs += Math.max(count, A.length - count) * (1 << (A[0].length - 1 - i));
  }

  return rs;
};

// Let's say original column i (not the first column) is (a1, a2, a3, a4, a5) and a2 and a4 are on the row whose first element is 0.
// Then we can choose to toggle row2 and row4 to make first column all 1s, which makes column i become (a1, a2 xor 1, a3, a4 xor 1, a5).
// Another choice is to toggle row1, row3, row5 to make first column all 0s and then toggle first column.
// This makes column i become (a1 xor 1, a2, a3 xor 1, a4, a5 xor 1).
// Then if we use xor 1 on each element of this tuple, we can easily see that:
// (a1 xor 1, a2, a3 xor 1, a4, a5 xor 1) xor 1 = (a1, a2 xor 1, a3, a4 xor 1, a5)
// So the two choices actually generates "opposite" results on later columns. The max(col, R - col) is same on all columns.
