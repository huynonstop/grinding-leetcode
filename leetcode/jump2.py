import math
from typing import List


class Solution:
    def jump(self, nums: List[int]) -> int:
        return jump(nums)


def jump_bf(nums):
    n = len(nums)

    def helper(i):
        if(i >= n - 1):
            return 0
        m = math.inf
        for j in range(1, nums[i] + 1):
            m = min(m, 1 + helper(i + j))
        return m

    return helper(0)


def jump_memo(nums):
    n = len(nums)
    memo = [math.inf] * n

    def helper(i):
        if i >= n - 1:
            return 0
        if memo[i] != math.inf:
            return memo[i]
        for j in range(1, nums[i] + 1):
            memo[i] = min(memo[i], 1 + helper(i + j))
        return memo[i]

    return helper(0)


def jump_dp(nums):
    n = len(nums)
    dp = [math.inf] * n
    dp[-1] = 0
    for i in range(n - 2, -1, -1):
        for j in range(1, nums[i] + 1):
            # min(n-1, i + jumpLen) for bounds handling
            dp[i] = min(dp[i], 1 + dp[min(n-1, i+j)])
    return dp[0]

# https://leetcode.com/problems/jump-game-ii/discuss/1192401/Easy-Solutions-w-Explanation-or-Optimizations-from-Brute-Force-to-DP-to-Greedy-BFS


def jump_greedy(nums):
    n = len(nums)
    i, last_jump_pos, max_reach, jumps = 0, 0, 0, 0

    while last_jump_pos < n - 1:
        max_reach = max(max_reach, i + nums[i])
        if i == last_jump_pos:
            last_jump_pos = max_reach
            jumps += 1
        i += 1

    return jumps


jump_greedy([2, 3, 1, 4, 1, 1, 1, 2])
