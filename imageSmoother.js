/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let m = [];
  let r = M.length;
  let c = M[0].length;
  for (let i = 0; i < r; i++) {
    m.push(Array(c).fill(0));
    for (let j = 0; j < c; j++) {
      let count = 0;
      for (let ar = i - 1; ar <= i + 1; ar++) {
        for (let ac = j - 1; ac <= j + 1; ac++) {
          if (0 <= ar && ar < r && 0 <= ac && ac < c) {
            m[i][j] += M[ar][ac];
            count++;
          }
        }
      }
      m[i][j] = Math.floor(m[i][j] / count);
    }
  }
  return m;
};
imageSmoother([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
