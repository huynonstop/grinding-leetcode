from typing import List


class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int,
                              right: int) -> int:
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        rs = 0
        for i in range(0, n):
            for j in range(0, n - i):
                if i == 0:
                    dp[j][j] = nums[j]
                else:
                    dp[j][j + i] = max(dp[j][j + i - 1], dp[j + 1][j + i])
                if dp[j][j + i] >= left and dp[j][j + i] <= right:
                    rs += 1
        return rs


# Suppose dp[i] denotes the max number of valid sub-array ending with A[i]. We use following example to illustrate the idea:

# A = [2, 1, 4, 2, 3], L = 2, R = 3

# if A[i] < L
# For example, i = 1. We can only append A[i] to a valid sub-array ending with A[i-1] to create new sub-array. So we have dp[i] = dp[i-1] (for i > 0)

# if A[i] > R:
# For example, i = 2. No valid sub-array ending with A[i] exist. So we have dp[i] = 0.
# We also record the position of the invalid number 4 here as prev.

# if L <= A[i] <= R
# For example, i = 4. In this case any sub-array starts after the previous invalid number to A[i] (A[prev+1..i], A[prev+2..i]) is a new valid sub-array. So dp[i] += i - prev

# Finally the sum of the dp array is the solution. Meanwhile, notice dp[i] only relies on dp[i-1] (and also prev), we can reduce the space complexity to O(1)

class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int,
                              right: int) -> int:
        n = len(nums)
        rs = 0
        l = 0
        m = -1
        for i in range(n):
            if nums[i] < left and i > 0:
                rs += l
            if nums[i] > right:
                l = 0
                m = i
            if left <= nums[i] <= right:
                l = i - m
                rs += l
        return rs


Solution().numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)
