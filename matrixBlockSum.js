/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * https://leetcode.com/problems/matrix-block-sum/discuss/477036/JavaPython-3-PrefixRange-sum-w-analysis-similar-to-LC-30478
 * https://computersciencesource.wordpress.com/2010/09/03/computer-vision-the-integral-image/
 */
var matrixBlockSum = function (mat, K) {
  const r = mat.length;
  const c = mat[0].length;
  const rangeSum = [];
  for (let i = 0; i < r + 1; i++) {
    rangeSum[i] = Array(c + 1).fill(0);
  }
  // +-----+-+-------+     +--------+-----+     +-----+---------+     +-----+--------+
  // |     | |       |     |        |     |     |     |         |     |     |        |
  // |     | |       |     |        |     |     |     |         |     |     |        |
  // +-----+-+       |     +--------+     |     |     |         |     +-----+        |
  // |     | |       |  =  |              |  +  |     |         |  -  |              | + mat[i][j]
  // +-----+-+       |     |              |     +-----+         |     |              |
  // |               |     |              |     |               |     |              |
  // |               |     |              |     |               |     |              |
  // +---------------+     +--------------+     +---------------+     +--------------+

  // rangeSum[i+1][j+1] =  rangeSum[i][j+1] + rangeSum[i+1][j]    -   rangeSum[i][j]   + mat[i][j]
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      rangeSum[i + 1][j + 1] =
        rangeSum[i + 1][j] + rangeSum[i][j + 1] - rangeSum[i][j] + mat[i][j];
    }
  }

  const ans = [];

  // +---------------+   +--------------+   +---------------+   +--------------+   +--------------+
  // |               |   |         |    |   |   |           |   |         |    |   |   |          |
  // |   (r1,c1)     |   |         |    |   |   |           |   |         |    |   |   |          |
  // |   +------+    |   |         |    |   |   |           |   +---------+    |   +---+          |
  // |   |      |    | = |         |    | - |   |           | - |      (r1,c2) | + |   (r1,c1)    |
  // |   |      |    |   |         |    |   |   |           |   |              |   |              |
  // |   +------+    |   +---------+    |   +---+           |   |              |   |              |
  // |        (r2,c2)|   |       (r2,c2)|   |   (r2,c1)     |   |              |   |              |
  // +---------------+   +--------------+   +---------------+   +--------------+   +--------------+

  for (let i = 0; i < r; i++) {
    ans[i] = [];
    for (let j = 0; j < c; j++) {
      let r1 = Math.max(0, i - K),
        c1 = Math.max(0, j - K),
        r2 = Math.min(r, i + K + 1),
        c2 = Math.min(c, j + K + 1);
      ans[i][j] =
        rangeSum[r2][c2] -
        rangeSum[r2][c1] -
        rangeSum[r1][c2] +
        rangeSum[r1][c1];
    }
  }
  return ans;
};
matrixBlockSum(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1
);
