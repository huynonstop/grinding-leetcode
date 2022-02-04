from typing import List


class Solution:
    def matrixReshape(self, mat: List[List[int]],
                      r: int, c: int) -> List[List[int]]:
        return reshape(mat, r, c)


def reshape(mat, r, c):
    m = len(mat)
    n = len(mat[0])

    if m * n != r * c:
        return mat

    res = []
    t = []

    for i in range(m):
        for j in range(n):
            t.append(mat[i][j])
            if len(t) >= c:
                res.append(t)
                t = []

    return res


print(reshape([[1, 2], [3, 4]], 1, 4))
