import re


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        return climb_stairs_no_memo(cost)


def climb_stairs_no_memo(cost):
    n = len(cost)

    def helper(i, total):
        if i >= n:
            return total
        cur_total = total + cost[i]
        return min(helper(i + 1, cur_total), helper(i + 2, cur_total))
    return min(helper(0, 0), helper(1, 0))


def climb_stairs_bf(cost):
    n = len(cost)

    def helper(i):
        if i < 0:
            return 0
        if i == 0 or i == 1:
            return cost[i]
        return cost[i] + min(helper(i - 1), helper(i-2))
    return min(helper(n - 1), helper(n-2))


def climb_stairs_memo(cost):
    n = len(cost)
    memo = [None] * n
    memo[0] = cost[0]
    memo[1] = cost[1]

    def helper(i):
        # if i < 0:
        #     return 0
        if not memo[i]:
            memo[i] = cost[i] + min(helper(i-1), helper(i-2))
        return memo[i]

    return min(helper(n-1), helper(n-2))


def climb_stairs_dp(cost):
    n = len(cost)
    dp = []
    for i in range(n):
        if i < 2:
            dp[i] = cost[i]
        else:
            dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    return min(dp[n-1], dp[n-2])


def climb_stairs_dp_op(cost):
    n = len(cost)
    dp1, dp2 = cost[0], cost[1]
    for i in range(2, n):
        cur = cost[i] + min(dp1, dp2)
        dp1 = dp2
        dp2 = cur
    return min(dp1, dp2)
