class Solution:
    def nearestExit(
            self, maze: List[List[str]],
            entrance: List[int]) -> int:
        r, c = len(maze), len(maze[0])
        start = (entrance[0], entrance[1])
        queue = set(start)
        d = 0
        while queue:
            temp = set()
            for i, j in queue:
                if (i, j) != start and (i == 0 or j == 0 or i == r - 1 or j == c - 1):
                    return d
                for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < r and 0 <= nj < c and maze[ni][nj] == '.':
                        maze[ni][nj] = '#'
                        temp.add((ni, nj))
            queue = temp
            d += 1
        return -1
