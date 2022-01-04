import collections


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        return shortest_path_bfs(grid)


def shortest_path_bfs(grid):
    R = len(grid)
    C = len(grid[0])
    if grid[0][0] or grid[R-1][C-1]:
        return -1
    dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [-1, -1],
        [1, 1],
        [1, -1],
        [-1, 1]]
    queue = collections.deque([(0, 0, 1)])
    seen = set()
    seen.add((0, 0))
    while queue:
        i, j, d = queue.popleft()
        if i == R - 1 and j == C - 1:
            return d
        for dx, dy in dirs:
            x, y = i + dx, j + dy
            if 0 <= x < R and 0 <= y < C and (
                    x, y) not in seen and grid[x][y] == 0:
                seen.add((x, y))
                queue.append((x, y, d + 1))
    return -1
