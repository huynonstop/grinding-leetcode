# class Solution:
#     def numEnclaves(self, grid: List[List[int]]) -> int:
#         return num(grid)

def num_fill(grid):
    r = len(grid)
    c = len(grid[0])

    def dfs(i, j):
        if grid[i][j] == 0 or not (0 <= i < r and 0 <= j < c):
            return
        grid[i][j] = 0
        dfs(i-1, j), dfs(i+1, j), dfs(i, j-1), dfs(i, j+1)

    for i in range(r):
        for j in range(c):
            if grid[i][j] == 1 and i == 0 or j == 0 or i == r - 1 or j == c - 1:
                dfs(i, j)

    return sum(sum(row) for row in grid)


def num(grid):
    r = len(grid)
    c = len(grid[0])

    def dfs(i, j):
        if not (0 <= i < r and 0 <= j < c):
            return -1
        if grid[i][j] == 0:
            return 0
        grid[i][j] = 0
        top, bot, left, right = dfs(
            i-1, j), dfs(i+1, j), dfs(i, j-1), dfs(i, j+1)
        return -1 if (top == -1 or bot == -1 or left == -1 or right == -1) else 1 + top + bot + left + right

    count = 0
    for i in range(r):
        for j in range(c):
            if grid[i][j] == 1:
                count += max(dfs(i, j), 0)
    return count


num([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])
