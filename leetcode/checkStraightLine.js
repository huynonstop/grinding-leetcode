/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;
  let pre = [null, null];
  for (let i = 0; i < coordinates.length - 1; i++) {
    let [x0, y0] = coordinates[i];
    let [x1, y1] = coordinates[i + 1];
    let dx = x0 - x1;
    let dy = y0 - y1;
    if (pre[0] !== null && pre[0] * dy !== pre[1] * dx) {
      return false;
    }
    pre[0] = dx;
    pre[1] = dy;
  }
  return true;
};
checkStraightLine([
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
]);
