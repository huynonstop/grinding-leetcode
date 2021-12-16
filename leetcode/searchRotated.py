from typing import List
import math


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return search_rotated(nums, target)

# https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14425/Concise-O(log-N)-Binary-search-solution


def search_rotated(nums, target):
    n = len(nums)
    l = 0
    r = len(nums) - 1
    while l < r:
        m = (l + r) >> 1
        if nums[m] > nums[r]:
            l = m + 1
        else:
            r = m

    rotate_idx = l
    l = 0
    r = len(nums) - 1
    while l <= r:
        m = (l + r) >> 1
        rm = (m + rotate_idx) % n
        if nums[rm] == target:
            return rm
        elif nums[rm] < target:
            l = m + 1
        else:
            r = m - 1
    return - 1

# https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14435/Clever-idea-making-it-simple


# Let's say nums looks like this: [12, 13, 14, 15, 16, 17, 18, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# Because it's not fully sorted, we can't do normal binary search. But here comes the trick:
#   If target is let's say 14, then we adjust nums to this, where "inf" means infinity:
#     [12, 13, 14, 15, 16, 17, 18, 19, inf, inf, inf, inf, inf, inf, inf, inf, inf, inf, inf, inf]
#   If target is let's say 7, then we adjust nums to this:
#     [-inf, -inf, -inf, -inf, -inf, -inf, -inf, -inf, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

def search_rotated_2(nums, target):
    n = len(nums)
    l, r = 0, n - 1
    while l < r:
        m = (l + r) >> 1
        vm = nums[m] if (nums[m] < nums[0]) == (target < nums[0]) else \
            (-math.inf if target < nums[0] else +math.inf)
        if vm < target:
            l = m + 1
        elif vm > target:
            r = m
        else:
            return m
    return l if nums[l] == target else -1

#  "If nums[mid] and target are "on the same side" of nums[0], just take nums[mid]"


def search_rotated_3(nums, target):
    n = len(nums)
    l, r = 0, n - 1
    while l < r:
        m = (l + r) >> 1
        # target and mid are on the same side
        if (nums[m] < nums[0]) == (target < nums[0]):
            # normal binary
            if nums[m] < target:
                l = m + 1
            elif nums[m] > target:
                r = m
            else:
                return m
        elif target < nums[0]:
            l = m + 1  # target on the right side
        else:
            r = m  # target on the left side
    return l if nums[l] == target else -1

# https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14436/Revised-Binary-Search


def search_rotated_4(nums, target):
    n = len(nums)
    l, r = 0, n - 1
    while l < r:
        m = (l + r) >> 1
        if (nums[m] == target):
            return m

        if (nums[l] <= nums[m]):
            if nums[l] <= target < nums[m]:
                r = m - 1
            else:
                l = m + 1
        else:
            if (nums[m] < target <= nums[r]):
                l = m + 1
            else:
                r = m - 1

    return l if nums[l] == target else -1
