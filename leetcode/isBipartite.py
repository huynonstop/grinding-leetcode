class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        dislike_graph = [set(d) for d in graph]
        colors = [0] * n

        def helper(i, color):
            colors[i] = color
            for j in dislike_graph[i]:
                if colors[j] == color:
                    return False
                if colors[j] == 0 and (
                        not helper(j, -color)):
                    return False
            return True
        for i in range(n):
            if colors[i] == 0 and (not helper(i, 1)):
                return False
        return True
