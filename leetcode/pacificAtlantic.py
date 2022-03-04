from collections import deque


class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        r, c = len(heights), len(heights[0])
        a_reach = [[False for _ in range(c)] for _ in range(r)]
        p_reach = [[False for _ in range(c)] for _ in range(r)]
        res = []

        def dfs(visited, i, j):
            if visited[i][j]:
                return
            visited[i][j] = True
            if i > 0 and heights[i-1][j] >= heights[i][j]:
                dfs(visited, i-1, j)
            if i < r - 1 and heights[i+1][j] >= heights[i][j]:
                dfs(visited, i+1, j)
            if j > 0 and heights[i][j-1] >= heights[i][j]:
                dfs(visited, i, j-1)
            if j < c - 1 and heights[i][j+1] >= heights[i][j]:
                dfs(visited, i, j+1)

        def bfs(visited, i, j):
            q = deque([(i, j)])
            while q:
                cur_i, cur_j = q.popleft()
                if not visited[cur_i][cur_j]:
                    visited[cur_i][cur_j] = True
                    if cur_i > 0 and heights[cur_i-1][cur_j] >= heights[cur_i][cur_j]:
                        q.append((cur_i-1, cur_j))
                    if cur_i < r - 1 and heights[cur_i+1][cur_j] >= heights[cur_i][cur_j]:
                        q.append((cur_i+1, cur_j))
                    if cur_j > 0 and heights[cur_i][
                            cur_j - 1] >= heights[cur_i][cur_j]:
                        q.append((cur_i, cur_j-1))
                    if cur_j < c - 1 and heights[cur_i][
                            cur_j + 1] >= heights[cur_i][cur_j]:
                        q.append((cur_i, cur_j+1))

        for i in range(r):
            dfs(p_reach, i, 0)
            dfs(a_reach, i, c-1)

        for j in range(c):
            dfs(p_reach, 0, j)
            dfs(a_reach, r-1, j)

        for i in range(r):
            for j in range(c):
                if a_reach[i][j] and p_reach[i][j]:
                    res.append([i, j])

        return res
