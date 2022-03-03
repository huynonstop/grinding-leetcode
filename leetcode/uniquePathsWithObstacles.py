# class Solution:
#     def uniquePathsWithObstacles(
#             self, obstacleGrid: List[List[int]]) -> int:
#         return unique_path(obstacleGrid)


def unique_path(grid):
    r = len(grid)
    c = len(grid[0])
    dp = [[1] * c for _ in range(r)]
    for i in range(0, r):
        for j in range(0, c):
            if grid[i][j] == 1:
                dp[i][j] = 0
            elif i != 0 or j != 0:
                dp[i][j] = (0 if i == 0 else dp[i-1][j]
                            ) + (0 if j == 0 else dp[i][j-1])
    return dp[r-1][c-1]


def unique_path_2(grid):
    r = len(grid)
    c = len(grid[0])
    dp = [[0] * (c+1) for _ in range(r+1)]
    dp[0][1] = 1
    for i in range(1, r+1):
        for j in range(1, c+1):
            if grid[i][j] != 1:
                dp[i][j] = dp[i-1][j]+dp[i][j-1]
    return dp[r][c]


unique_path([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
