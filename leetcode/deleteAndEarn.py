from typing import List


class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        return dp(nums)


def dp(nums):
    n = 10001
    bucket = [0] * n
    for num in nums:
        bucket[num] += num

    dp = [0] * n
    dp[0] = 0
    dp[1] = bucket[1]
    for i in range(2, n):
        dp[i] = max(dp[i-2] + sum[i], dp[i-1])

    return dp[n-1]
