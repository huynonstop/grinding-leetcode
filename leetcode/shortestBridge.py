# class Solution:
#     def shortestBridge(self, grid: List[List[int]]) -> int:
#         return find_then_expand(grid)


def find_then_expand(grid):
    r, c = len(grid), len(grid[0])
    queue = set()

    def paint_dfs(i, j):
        grid[i][j] = 2
        queue.add((i, j))
        for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < r and 0 <= nj < c and grid[ni][nj] == 1:
                paint_dfs(ni, nj)

    i = 0
    while i < r and not queue:
        j = 0
        while j < c and not queue:
            if grid[i][j] == 1:
                paint_dfs(i, j)
            j += 1
        i += 1

    while queue:
        temp = set()
        for i, j in queue:
            for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                ni, nj = i + di, j + dj
                if 0 <= ni < r and 0 <= nj < c:
                    if grid[ni][nj] == 1:
                        return grid[i][j] - 2
                    if grid[ni][nj] == 0:
                        grid[ni][nj] = grid[i][j] + 1
                        temp.add((ni, nj))
        queue = temp
    return 0


find_then_expand(
    [[0, 0, 0, 0, 0, 0],
     [0, 1, 0, 0, 0, 0],
     [1, 1, 0, 0, 0, 0],
     [1, 1, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0],
     [0, 0, 1, 1, 0, 0]])
