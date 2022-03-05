from typing import List


class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)
        state = [0] * n
        # -1 unsafe, has a cycle
        # 0 unvisited
        # 1 safe

        def dfs(i):
            if state[i] != 0:
                return state[i] == 1
            state[i] = -1
            for j in graph[i]:
                if not dfs(j):
                    return False
            state[i] = 1
            return True

        res = []
        for i in range(n):
            if dfs(i):
                res.add(i)
        return res


Solution().eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []])
