from collections import deque


class Solution:
    def numOfMinutes(
            self, n: int, headID: int, manager: List[int],
            informTime: List[int]) -> int:
        graph = [[] for _ in range(n)]
        time = [0] * n
        for i, v in enumerate(manager):
            if v != -1:
                graph[v].append(i)
        q = deque([headID])
        while q:
            cur = q.popleft()
            for e in graph[cur]:
                time[e] = time[cur] + informTime[cur]
                q.append(e)
        return max(time)


def num_of_min_dfs(n, headId, manager, informTime):
    mx = 0
    for i in range(n):
        mx = max(mx, dfs(i))

    def dfs(i):
        if manager[i] != -1:
            informTime[i] += dfs(manager[i])
            manager[i] = -1
        return informTime[i]

    return mx


def num_of_min_dfs(n, headId, manager, informTime):
    child_graph = [[] for _ in range(n)]
    for i, m in enumerate(manager):
        if m >= 0:
            child_graph[m].append(i)

    def dfs(i):
        mx = 0
        if not child_graph[i]:
            return mx
        for j in child_graph[i]:
            mx = max(mx, dfs(j))
        return mx + informTime[i]

    return dfs(headId)
