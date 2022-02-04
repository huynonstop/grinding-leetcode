from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        return pascal_triangle(numRows)


def pascal_triangle(numRows):
    res = [[1]]
    for i in range(1, numRows):
        t = [1]
        j = 1
        while j < i:
            t.append(res[i-1][j] + res[i-1][j-1])
            j += 1
        t.append(1)
        res.append(t)

    return res


pascal_triangle(3)
