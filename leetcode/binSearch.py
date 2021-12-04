from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return binary_search(nums, target, 0, len(nums) - 1)


def binary_search(nums, target, l, r):
    if l > r:
        return -1
    mid = (l + r) >> 1
    if target < nums[mid]:
        return binary_search(nums, target, l, mid - 1)
    elif target > nums[mid]:
        return binary_search(nums, target, mid + 1, r)
    return mid


def binary_search_iterate(nums, target, l, r):
    while(l <= r):
        mid = (l + r) >> 1
        if target < nums[mid]:
            r = mid - 1
        elif target > nums[mid]:
            l = mid + 1
        else:
            return mid
    return -1

#        v-- lower bound
# t t t t f f f f f f      <-- smaller than?
# 1 2 3 4 5 5 5 6 7 9
# f f f f f f f t t t      <-- greater than?
#              ^-- upper bound


def binary_search_lower_bound(nums, target):
    l = 0
    r = len(nums)

    while(l < r):
        mid = (l + r) >> 1  # 3,4 => 3

        if target <= nums[mid]:
            r = mid
        else:
            l = mid + 1
    return l if target == nums[l] else -1


def binary_search_upper_bound(nums, target):
    l = 0
    r = len(nums)

    while(l < r):
        mid = (l + r + 1) >> 1  # 3,4 => 4

        if target < nums[mid]:
            r = mid - 1
        else:
            l = mid
    return l if target == nums[l] else -1


binary_search_upper_bound([0, 2, 3, 5, 5, 6], 5)
