/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let rs = 0;
  let N = grid.length;
  let M = grid[0].length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        rs = Math.max(fill(grid, i, j, N, M), rs);
      }
    }
  }
  return rs;
};

const fill = (grid, i, j, N, M) => {
  if (i < 0 || i >= N || j < 0 || j >= M) return 0;
  if (grid[i][j]) {
    grid[i][j] = 0;
    let rs = 1;
    rs += fill(grid, i - 1, j, N, M);
    rs += fill(grid, i + 1, j, N, M);
    rs += fill(grid, i, j - 1, N, M);
    rs += fill(grid, i, j + 1, N, M);
    return rs;
  }
  return 0;
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
