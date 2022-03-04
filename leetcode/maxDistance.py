# class Solution:
#     def maxDistance(self, grid: List[List[int]]) -> int:
#         return max_distance_dfs(grid)


def max_distance_dfs(grid):
    r, c = len(grid), len(grid[0])

    def dfs(i, j, dist):
        if grid[i][j] == 0 or dist < grid[i][j]:
            grid[i][j] = dist
            if i > 0:
                dfs(i-1, j, dist+1)
            if i < r - 1:
                dfs(i+1, j, dist+1)
            if j > 0:
                dfs(i, j-1, dist+1)
            if j < c-1:
                dfs(i, j+1, dist+1)

    for i in range(r):
        for j in range(c):
            if grid[i][j] == 1:
                grid[i][j] = 0
                dfs(i, j, 1)
    mx = -1
    for i in range(r):
        for j in range(c):
            if grid[i][j] > 1:
                mx = max(mx, grid[i][j] - 1)
    return mx


max_distance_dfs([[1, 0, 1], [0, 0, 0], [1, 0, 1]])


def max_distance(grid):
    r, c = len(grid), len(grid[0])

    queue = set()
    for i in range(r):
        for j in range(c):
            if grid[i][j] == 1:
                queue.update(
                    (i + dx, j + dy)
                    for dx, dy
                    in [(-1, 0),
                        (1, 0),
                        (0, -1),
                        (0, 1)])
    step = 0
    while queue:
        temp = set()
        step += 1
        for i, j in queue:
            if 0 <= i < r and 0 <= j < c and grid[i][j] == 0:
                grid[i][j] = step
                temp.update((i + dx, j + dy)
                            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)])
        queue = temp
    return -1 if step == 1 else step - 1
