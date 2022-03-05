from typing import List


class Solution:
    def makeConnected(
            self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n - 1:
            return -1
        components = [set() for _ in range(n)]
        for i, j in connections:
            components[i].add(j)
            components[j].add(i)

        seen = [0] * n

        def dfs(i):
            if seen[i]:
                return 0
            seen[i] = 1
            for j in components[i]:
                dfs(j)
            return 1

        count = 0
        for i in range(n):
            count += dfs(i)
        return count - 1


def make_connected_union_find(n, connections):
    if len(connections) < n - 1:
        return -1
    parent = [i for i in range(n)]
    components = 0
    extra_edge = 0

    def find(i):
        if parent[i] == i:
            return i
        parent[i] = find(parent[i])
        return parent[i]

    for u, v in connections:
        p1 = find(u)
        p2 = find(v)
        if p1 == p2:
            extra_edge += 1
        else:
            parent[p2] = p1

    for i in range(n):
        components += (parent[i] == i)
    return components - 1 if extra_edge >= components - 1 else -1


Solution().makeConnected(4, [[0, 1], [0, 2], [1, 2]])
