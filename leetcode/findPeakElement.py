from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        return find_peak_element(nums)


def find_peak_element(nums):
    n = len(nums)
    if n == 1 or nums[0] > nums[1]:
        return 0
    if nums[n - 1] > nums[n-2]:
        return n - 1
    l = 1
    r = n - 2
    while l < r:
        m = (l + r) >> 1
        if nums[m] > nums[m-1] and nums[m] > nums[m+1]:
            return m
        elif nums[m] <= nums[m-1]:
            r = m - 1
        elif nums[m] <= nums[m+1]:
            l = m + 1
    return l


def find_peak_element(nums):
    l = 0
    r = len(nums) - 1
    while l < r:
        m1 = (l + r) >> 1
        m2 = m1 + 1
        if nums[m1] < nums[m2]:
            l = m1 + 1
        else:
            r = m1
    return l


find_peak_element([1, 2])
