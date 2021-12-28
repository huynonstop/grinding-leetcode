import math


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        begin = 0
        n = len(nums)
        ans = +math.inf
        sum = 0
        for i in range(n):
            sum += nums[i]
            while sum >= target:
                ans = min(ans, i - begin + 1)
                sum -= nums[begin]
                begin += 1
        return ans if ans != +math.inf else 0
