from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        return three_sum(nums)


def three_sum(nums):
    n = len(nums)
    nums.sort()
    res = []

    def two_sum(nums, i):
        if i > 0 and nums[i] == nums[i - 1]:
            return
        l = i + 1
        r = n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s < 0:
                l += 1
            elif s > 0:
                r -= 1
            else:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l+1]:
                    l += 1
                while l < r and nums[r] == nums[r-1]:
                    r -= 1
                l += 1
                r -= 1

    for i in range(n-2):
        two_sum(nums, i)

    return res


print(three_sum([-1, 0, 1, 2, -1, -4]))
