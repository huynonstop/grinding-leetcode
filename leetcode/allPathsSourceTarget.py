from typing import List


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        return all_paths(graph)


def all_paths_dfs(graph):
    rs = []
    n = len(graph)
    goal = n - 1

    def dfs(node, path):
        if node == goal:
            rs.append(path)
        for v in graph[node]:
            dfs(v, path + [v])

    dfs(0, [0])
    return rs


def all_paths(graph):
    rs = []
    n = len(graph)
    goal = n - 1

    stack = [0]
    paths = [[0]]
    while stack:
        node = stack.pop()
        path = paths.pop()

        if node == goal:
            rs.append(path)

        for v in graph[node]:
            stack.append(v)
            paths.append(path + [v])

    return rs


print(all_paths([[1, 2], [3], [3], []]))
