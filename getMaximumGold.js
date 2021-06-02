/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let N = grid.length;
  let M = grid[0].length;
  let max = 0;
  const helper = (g, i, j) => {
    if (i < 0 || i >= N || j < 0 || j >= M) {
      return g;
    }
    if (grid[i][j] === 0) return g;
    const cur = grid[i][j] + g;
    grid[i][j] = 0;
    const left = helper(cur, i, j - 1);
    const right = helper(cur, i, j + 1);
    const top = helper(cur, i - 1, j);
    const down = helper(cur, i + 1, j);
    grid[i][j] = cur - g;
    max = Math.max(max, cur, left, right, top, down, g);
    return max;
  };
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      helper(0, i, j);
    }
  return max;
};

// class Solution:
//     def getMaximumGold(self, grid: List[List[int]]) -> int:
//         def findMaxGold(r: int, c: int) -> int:
//             if r < 0 or r == m or c < 0 or c == n or grid[r][c] == 0: return 0
//             origin = grid[r][c]
//             grid[r][c] = 0  # mark as visited
//             maxGold = 0
//             for nr, nc in ((r, c + 1), (r, c - 1), (r + 1, c), (r - 1, c)):
//                 maxGold = max(findMaxGold(nr, nc), maxGold)
//             grid[r][c] = origin  # backtrack
//             return maxGold + origin

//         m, n = len(grid), len(grid[0])
//         return max(findMaxGold(r, c) for c in range(n) for r in range(m))
getMaximumGold([
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
]);
