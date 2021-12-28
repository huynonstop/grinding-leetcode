from typing import List


class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        return interval_intersection(firstList, secondList)


def interval_intersection(firstList, secondList):
    i, j = 0, 0
    rs = []
    n, m = len(firstList), len(secondList)
    while (i < n and j < m):
        a, b = firstList[i]
        c, d = secondList[j]
        lo = max(a, c)
        hi = min(b, d)
        if (lo <= hi):
            rs.append([lo, hi])
        # if (b < d):
        #     i += 1
        # else:
        #     j += 1

        if hi == b:
            i += 1
        if hi == d:
            j += 1
    return rs
