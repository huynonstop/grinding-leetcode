import collections
import heapq


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1:
            return -1
        path = shortest_path_astar(grid)
        if path:
            return len(path)
        return -1


def shortest_path_astar(grid):
    r = len(grid)
    c = len(grid[0])

    dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [-1, -1],
        [1, 1],
        [1, -1],
        [-1, 1]]

    start = (0, 0)
    goal = (r-1, c-1)
    frontier = []
    heapq.heappush(frontier, (0, start))
    visited = set()
    parent = dict()
    dist = dict()
    dist[start] = 0

    def construct_path(start, end):
        path = [end]
        cur = end
        while cur != start:
            cur = parent[cur]
            path.append(cur)
        return path[::-1]

    while frontier:
        piority, node = heapq.heappop(frontier)
        if node not in visited:
            visited.add(node)

            if node == goal:
                return construct_path(start, node)

            for di, dj in dirs:
                si, sj = node[0] + di, node[1] + dj  # successor
                if 0 <= si < r and 0 <= sj < c and grid[si][sj] == 0:

                    heuristic = abs(si - goal[0]) + abs(sj - goal[1])
                    weight = 1
                    heapq.heappush(
                        frontier,
                        (dist[node] + weight + heuristic, (si, sj)))

                    if (si, sj) not in dist or dist[node] + weight < dist[(si, sj)]:
                        dist[(si, sj)] = dist[node] + weight
                        parent[(si, sj)] = node
    return None


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
