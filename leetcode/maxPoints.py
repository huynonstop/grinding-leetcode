from typing import List


class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        return max_points(points)


def gcd(n1, n2):
    if n2 == 0:
        return n1
    return gcd(n2, n1 % n2)


def max_points(points):
    n = len(points)
    res = 0
    for i in range(n-1):
        d = dict()
        same = 1
        x1, y1 = points[i]
        for j in range(i + 1, n):
            x2, y2 = points[j]
            if x1 == x2 and y1 == y2:
                same += 1
            else:
                dx, dy = x2 - x1, y2 - y1
                g = gcd(dx, dy)
                slope = dx // g, dy // g
                cur = d.get(slope, 0)
                d[slope] = cur + 1
        res = max(res, same + max(list(d.values()) + [0]))
    return res


max_points(
    [[2, 3], [3, 3], [-5, 3]]
)
