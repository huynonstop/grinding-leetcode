from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        return search_insert(nums, target)


def search_insert(nums: List[int], target: int):
    l = 0
    r = len(nums) - 1
    while l <= r:
        m = (l + r) >> 1
        if target > nums[m]:
            l = m + 1
        else:
            r = m - 1
    return l

# lower bound


def search_insert_pog(nums: List[int], target: int):
    l = 0
    r = len(nums)
    while l < r:
        m = (l + r) >> 1
        if target > nums[m]:
            l = m + 1
        else:
            r = m  # r always decreases
    return l


print(Solution().searchInsert([5, 5, 5, 5], 5))
