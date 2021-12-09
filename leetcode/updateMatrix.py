from typing import List
import math
from collections import deque


class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        return update_matrix(mat)


def update_matrix_bfs(mat):
    R = len(mat)
    C = len(mat[0])
    visited = set()
    q = deque()
    for i in range(R):
        for j in range(C):
            if mat[i][j] == 0:
                visited.add((i, j))
                q.append((i, j))

    while q:
        i, j = q.popleft()
        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            newX, newY = i+dx, j+dy
            if newX >= 0 and newX <= R-1 and newY >= 0 and newY <= C-1 and (newX, newY) not in visited:
                mat[newX][newY] = mat[i][j] + 1
                visited.add((newX, newY))
                q.append((newX, newY))
    return mat


def update_matrix(mat):
    R = len(mat)
    C = len(mat[0])
    res = [[math.inf] * C for _ in range(R)]

    for i in range(R):
        for j in range(C):
            if mat[i][j] == 0:
                res[i][j] = 0
            else:
                if i > 0:
                    res[i][j] = min(res[i][j], res[i - 1][j] + 1)
                if j > 0:
                    res[i][j] = min(res[i][j], res[i][j - 1] + 1)

    for i in range(R - 1, 0 - 1, - 1):
        for j in range(C - 1, 0 - 1, -1):
            if i < R - 1:
                res[i][j] = min(res[i][j], res[i + 1][j] + 1)
            if j < C - 1:
                res[i][j] = min(res[i][j], res[i][j + 1] + 1)

    return res


mat = [
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]]
update_matrix(mat)
# https://leetcode.com/problems/01-matrix/discuss/1369741/C%2B%2BJavaPython-BFS-DP-solutions-with-Picture-Clean-and-Concise-O(1)-Space
# https://leetcode.com/problems/01-matrix/discuss/363902/BFS-python-explained-and-commneted-(two-approaches)
# https://leetcode.com/problems/01-matrix/solution/
