/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rs = 0;
  let vertical = Array(grid.length).fill(0);
  let horizontal = Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > vertical[i]) vertical[i] = grid[i][j];
      if (grid[i][j] > horizontal[j]) horizontal[j] = grid[i][j];
    }

  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      rs = rs + Math.min(vertical[i], horizontal[j]) - grid[i][j];
    }
  return rs;
};
maxIncreaseKeepingSkyline([
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
]);
