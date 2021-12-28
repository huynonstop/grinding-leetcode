class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        return num_islands(grid)


def num_islands(grid):
    res = 0
    R = len(grid)
    C = len(grid[0])

    def dfs(i, j):
        if grid[i][j] == '1':
            grid[i][j] = '0'
            if i > 0:
                dfs(i - 1, j)
            if i < R - 1:
                dfs(i + 1, j)
            if j > 0:
                dfs(i, j - 1)
            if j < C - 1:
                dfs(i, j + 1)

    for i in range(R):
        for j in range(C):
            if grid[i][j] == '1':
                res += 1
                dfs(i, j)

    return res
