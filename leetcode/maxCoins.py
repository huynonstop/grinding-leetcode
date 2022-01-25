from typing import List


class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        return dp_max_coins(nums)


def memo_max_coins(nums):
    n = len(nums)
    arr = [1] + nums[:] + [1]
    memo = [[0] * (n+2) for i in range(n+2)]

    def helper(left, right):
        if left + 1 == right:
            return 0

        if memo[left][right] > 0:
            return memo[left][right]

        ans = 0

        for i in range(left + 1, right):
            ans = max(ans, arr[left] * arr[i] * arr[right]
                      + helper(left, i) + helper(i, right))

        memo[left][right] = ans
        return ans

    return helper(0, n + 1)


def dp_max_coins(nums):
    n = len(nums)
    arr = [1] + nums[:] + [1]
    dp = [[0] * (n+2) for i in range(n+2)]

    for w in range(1, n + 1):
        for l in range(1, n - w + 1 + 1):
            r = l + w - 1
            for i in range(l, r + 1):
                dp[l][r] = max(
                    dp[l][r],
                    arr[l - 1] * arr[i] * arr[r + 1] +
                    dp[l][i - 1] +
                    dp[i + 1][r])

    return dp[1][n]
