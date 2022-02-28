from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        return can_jump_memo(nums)


def can_jump_memo(nums):
    n = len(nums)
    memo = [None] * (n-1)
    memo.append(True)

    def helper(i):
        if memo[i] is None:
            t = False
            if i+nums[i] >= n - 1:
                memo[i] = True
                return True
            for j in range(i + 1, min(n, i+nums[i] + 1)):
                t = t or helper(j)
            memo[i] = t
        return memo[i]

    return helper(0)


def can_jump_dp(nums):
    n = len(nums)
    dp = [False] * (n - 1)
    dp.append(True)
    i = n - 1
    while i >= 0:
        r = min(n - 1, nums[i] + i)
        l = i
        c = False
        while l <= r and not c:
            c = c or dp[l]
            l += 1
        dp[i] = c
        i -= 1
    return dp[0]


def can_jump_greedy(nums):
    n = len(nums)
    farest = 0
    for i in range(n):
        if farest < i:
            return False
        farest = max(i + nums[i], farest)
    return True


can_jump(
    [3, 2, 1, 0, 4])
