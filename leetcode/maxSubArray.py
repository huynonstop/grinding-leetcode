import math
# https: // leetcode.com/problems/maximum-subarray/discuss/1595186/Java-oror-Kadane-ororDivide-and-Conquer-oror-Dp


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        return max_sub_array(nums)


def max_sub_array_dp(nums):
    n = len(nums)
    a = []
    a[0] = nums[0]
    res = nums[0]

    for i in range(1, n):
        a[i] = max(a[i-1] + nums[i], nums[i])
        res = max(res, a[i])
    return res


def max_sub_array(nums):
    res = -math.inf
    cur = 0
    for n in nums:
        cur += n
        res = max(cur, res)
        if cur < 0:
            cur = 0
    return res
