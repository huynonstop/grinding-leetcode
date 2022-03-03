class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        return closed_island(grid)


def closed_island(grid):
    res = 0

    R = len(grid)
    C = len(grid[0])

    for i in range(R):
        for j in range(C):
            if grid[i][j] != 0:
                res += is_closed(grid, i, j)

    return res


def is_closed(grid, i, j):

    if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[i]):
        return 0
    if grid[i][j] == 1:
        return 1

    grid[i][j] = 1

    up = is_closed(grid, i, j+1)
    down = is_closed(grid, i, j-1)
    left = is_closed(grid, i-1, j)
    right = is_closed(grid, i+1, j)

    return min(up, down, left, right)
