# class Solution:
#     def countSubIslands(
#             self, grid1: List[List[int]],
#             grid2: List[List[int]]) -> int:
#         return count(grid1, grid2)


def count(grid1, grid2):
    r = len(grid1)
    c = len(grid1[0])

    def dfs_2(i, j):
        if not (0 <= i < r and 0 <= j < c and grid2[i][j] == 1):
            return True

        grid2[i][j] = 0
        res = grid1[i][j] == 1
        for di, dj in [[0, 1], [1, 0], [-1, 0], [0, -1]]:
            res &= dfs(i + di, j + dj)
        return res

    def dfs(i, j):
        if grid2[i][j] == 1:
            grid2[i][j] = 0
            top = bot = right = left = True
            if i >= 1:
                top = dfs(i - 1, j)
            if i <= r - 2:
                bot = dfs(i + 1, j)
            if j >= 1:
                left = dfs(i, j - 1)
            if j <= c - 2:
                right = dfs(i, j + 1)
            return grid1[i][j] == 1 and top and bot and left and right
        return True

    count = 0
    for i in range(r):
        for j in range(c):
            if grid2[i][j] == 1:
                count += dfs(i, j)
    return count


count(
    [[1, 1, 1, 0, 0],
     [0, 1, 1, 1, 1],
     [0, 0, 0, 0, 0],
     [1, 0, 0, 0, 0],
     [1, 1, 0, 1, 1]],
    [[1, 1, 1, 0, 0],
     [0, 0, 1, 1, 1],
     [0, 1, 0, 0, 0],
     [1, 0, 1, 1, 0],
     [0, 1, 0, 1, 0]])
