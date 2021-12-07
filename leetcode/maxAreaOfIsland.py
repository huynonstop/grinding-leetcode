from typing import List


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        return max_area_of_island(grid)


def max_area_of_island(grid):
    res = 0

    R = len(grid)
    C = len(grid[0])

    for i in range(R):
        for j in range(C):
            if grid[i][j] != 0:
                res = max(res, dfs_count(grid, i, j))

    return res


def dfs_count_recursive(grid, r, c):

    if r < 0 or c < 0 or r >= len(grid) or c >= len(
            grid[r]) or grid[r][c] == 0:
        return 0

    grid[r][c] = 0

    up = dfs_count_recursive(grid, r, c+1)
    down = dfs_count_recursive(grid, r, c-1)
    left = dfs_count_recursive(grid, r-1, c)
    right = dfs_count_recursive(grid, r+1, c)

    return up + down + left + right + 1


def dfs_count(grid, r, c):
    count = 0
    stack = []
    stack.append((r, c))
    R = len(grid)
    C = len(grid[0])
    while stack:
        cr, cc = stack.pop()
        if grid[cr][cc] == 1:
            count += 1
            grid[cr][cc] = 0
            if cr >= 1:
                stack.append((cr - 1, cc))
            if cr + 1 < R:
                stack.append((cr + 1, cc))
            if cc >= 1:
                stack.append((cr, cc - 1))
            if cc + 1 < C:
                stack.append((cr, cc + 1))
    return count


max_area_of_island(
    [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])
