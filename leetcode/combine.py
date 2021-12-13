from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        return combine(n, k)


def combine(n, k):
    res = []
    cur = []

    def backtrack(start=1, need=k):
        if need == 0:
            res.append(list(cur))
            return

        for i in range(start, n - need + 2):  # [1, n]
            cur.append(i)
            backtrack(i + 1, need - 1)
            cur.pop()

    backtrack()
    return res


print(combine(4, 2))
