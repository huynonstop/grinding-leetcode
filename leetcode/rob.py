from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        return rob_no_memo(nums)


def rob_top_down_no_memo(nums):
    n = len(nums)

    def helper(i):
        if i >= n:
            return 0
        return nums[i] + max(helper(i + 2), helper(i + 3))

    return max(helper(0), helper(1))


def rob_top_down_memo(nums):
    n = len(nums)
    memo = [None] * n

    def helper(i):
        if i >= n:
            return 0
        if memo[i] is None:
            memo[i] = nums[i] + max(helper(i + 2), helper(i + 3))
        return memo[i]

    return max(helper(0), helper(1))


def rob_dp(nums):
    if not nums:
        return 0
    prev_1_step = 0
    prev_2_step = 0
    for num in nums:
        prev_2_step, prev_1_step = prev_1_step, max(
            num + prev_2_step, prev_1_step)
    return prev_1_step


print(rob_top_down_memo([2, 7, 9, 3, 1]))
