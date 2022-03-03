from typing import List


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        r = len(grid)
        c = len(grid[0])
        dp = grid[0][:]
        for j in range(1, c):
            dp[j] += dp[j-1]
        for i in range(1, r):
            dp[0] += grid[i][0]
            for j in range(1, c):
                dp[j] = min(dp[j], dp[j-1]) + grid[i][j]
        return dp[-1]


Solution().minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
