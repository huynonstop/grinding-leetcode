from typing import List


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        return minimun_total_brute_force(triangle)


def minimun_total_brute_force(triangle):
    n = len(triangle)

    def helper(level, i):
        if level >= n:
            return 0
        if i > level:
            return 0
        return triangle[level][i] + min(helper(level + 1, i),
                                        helper(level + 1, i+1))
    return helper(0, 0)

# Top down


def minimun_total_memo(triangle):
    n = len(triangle)
    memo = [[None] * (level + 1) for level in range(n)]

    def helper(level, i):
        if level >= n or i > level:
            return 0
        if memo[level][i] is None:
            memo[level][i] = triangle[level][i] + min(
                helper(level + 1, i), helper(level + 1, i+1))
        return memo[level][i]

    return helper(0, 0)

# Bottom up


def minimun_total_dp(triangle):
    n = len(triangle)
    memo_min = triangle[-1][:]  # copy of last level
    # second last level -> first level
    for level in range(n - 2, -1, -1):
        # all memo_min value in cur level
        for i in range(level + 1):
            memo_min[i] = triangle[level][i] + \
                min(memo_min[i], memo_min[i + 1])
    return memo_min[0]


print(minimun_total_brute_force(
    [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
