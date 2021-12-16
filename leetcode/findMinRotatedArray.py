from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        return find_min(nums)


def find_min(nums):
    l = 0
    r = len(nums) - 1

    while l < r:
        m = (l + r) >> 1
        if nums[l] <= nums[r]:
            return nums[l]
        elif nums[m] >= nums[l]:
            l = m + 1
        else:
            r = m

    return nums[l]

# https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/158940/Beat-100%3A-Very-Simple-(Python)-Very-Detailed-Explanation


def find_min(nums):
    l = 0
    r = len(nums) - 1

    while l < r:
        m = (l + r) >> 1
        if nums[m] > nums[r]:
            l = m + 1
        else:
            r = m

    return nums[l]


find_min([2, 1])
