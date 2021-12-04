from typing import List


class Solution:
    def searchRange(
            self, nums: List[int],
            target: int) -> List[int]:
        return bin_search_range(nums, target)


def bin_search_range(nums, target):
    if not nums:
        return [-1, -1]
    return [bin_search_lower_bound(nums, target), bin_search_upper_bound(nums, target)]


def bin_search_lower_bound(nums, target):
    l, r = 0, len(nums) - 1

    while l < r:
        m = (l + r) >> 1
        if target > nums[m]:
            l = m + 1
        else:  # target <= x
            r = m
    return l if nums[l] == target else -1

# T T T T F F F target <= x => keep [l, x] else keep [x + 1, r]
# 0 1 2 2 3 4 5 target = 2
# F F T T T T T target >= x => keep [x, r] else keep [l, x - 1]


def bin_search_upper_bound(nums, target):
    l, r = 0, len(nums) - 1
    while l < r:
        m = (l + r + 1) >> 1
        if target < nums[m]:
            r = m - 1
        else:  # target >= x
            l = m
    return l if nums[l] == target else -1
