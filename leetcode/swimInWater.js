/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  const dfs = (i, j, t) => {
    if (i < 0 || j < 0 || i >= n || j >= n) return n * n;
    if (grid[i][j] === -1) return n * n;
    const c = grid[i][j];
    t = Math.max(c, t);
    if (i === n - 1 && j === n - 1) return t;
    grid[i][j] = -1;
    const left = dfs(i, j - 1, t);
    const right = dfs(i, j + 1, t);
    const top = dfs(i - 1, j, t);
    const bot = dfs(i + 1, j, t);
    grid[i][j] = c;
    return Math.min(left, right, top, bot);
  };
  return dfs(0, 0, 0);
};
swimInWater([
  [10, 12, 4, 6],
  [9, 11, 3, 5],
  [1, 7, 13, 8],
  [2, 0, 15, 14],
]);
