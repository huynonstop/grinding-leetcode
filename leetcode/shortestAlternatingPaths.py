from collections import deque


class Solution:
    def shortestAlternatingPaths(
            self, n: int, redEdges: List[List[int]],
            blueEdges: List[List[int]]) -> List[int]:

        red_graph = [[] for _ in range(n)]
        blue_graph = [[] for _ in range(n)]
        for i, j in redEdges:
            red_graph[i].append(j)
        for i, j in blueEdges:
            blue_graph[i].append(j)
        dist = [[0, 0]] + [[float('inf'), float('inf')]
                           for _ in range(n - 1)]

        queue = deque([(0, 0), (0, 1)])
        while queue:
            i, c = queue.popleft()
            g = red_graph if c == 0 else blue_graph
            for j in g[i]:
                if dist[j][c] == float('inf'):
                    dist[j][c] = dist[i][1-c] + 1
                    queue.append((j, 1-c))
        return [x if x < float('inf') else -1 for x in map(min, dist)]
