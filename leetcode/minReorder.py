class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = [[] for _ in range(n)]
        visited = [False] * n
        for i, j in connections:
            graph[i].append(j)
            graph[j].append(-i)

        def dfs(i):
            change = 0
            visited[i] = True
            for j in graph[i]:
                if not visited[abs(j)]:
                    change += dfs(abs(j)) + (j > 0)
            return change

        return dfs(0)
