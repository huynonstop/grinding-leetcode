/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let set = new Set();
  let xArray = new Array();
  for (let [x, y] of points) {
    if (!set.has(x)) {
      set.add(x);
      xArray.push(x);
    }
  }
  xArray.sort((x, y) => x - y);
  let max = 0;
  for (let i = 0; i < xArray.length - 1; i++) {
    max = Math.max(xArray[i + 1] - xArray[i], max);
  }
  return max;
};
var maxWidthOfVerticalArea = function (points) {
  points.sort(([x1], [x2]) => x1 - x2);
  let max = 0;
  for (let i = 0; i < points.length - 1; i++) {
    max = Math.max(points[i + 1][0] - points[i][0], max);
  }
  return max;
};
var maxWidthOfVerticalArea = function (points) {
  let xArray = new Array();
  let minIndex = Infinity;
  for (let [x, y] of points) {
    xArray[x] = 1;
    minIndex = Math.min(x, minIndex);
  }
  let max = 0;
  for (let i = minIndex + 1; i < xArray.length - 1; i++) {
    if (xArray[i]) {
      max = Math.max(i - minIndex, max);
      minIndex = i;
    }
  }
  return max;
};
maxWidthOfVerticalArea([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]);
