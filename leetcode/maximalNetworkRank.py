from typing import List


class Solution:
    def maximalNetworkRank(
            self, n: int, roads: List[List[int]]) -> int:
        rank = [0] * n
        graph = [set() for _ in range(n)]
        for i, j in roads:
            rank[i] += 1
            rank[j] += 1
            graph[i].add(j)
            graph[j].add(i)

        res = 0
        for i in range(n):
            for j in range(i+1, n):
                res = max(
                    res, rank[i] + rank[j] -
                    (1 if i in graph[j] else 0))
        return res


Solution().maximalNetworkRank(
    8, [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]])
