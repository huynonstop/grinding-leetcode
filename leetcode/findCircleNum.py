from typing import List


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        return count_provinces(isConnected)


def count_provinces(isConnected):
    res = 0
    seen = set()
    stack = []
    n = len(isConnected)

    for v in range(n):
        if v not in seen:
            res += 1
            seen.add(v)
            stack.append(v)
            while stack:
                cur = stack.pop()
                for cn_v in range(n):
                    if cn_v not in seen and isConnected[cur][cn_v] == 1:
                        seen.add(cn_v)
                        stack.append(cn_v)

    return res
