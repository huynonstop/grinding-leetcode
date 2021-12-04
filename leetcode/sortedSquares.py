from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return sorted_square(nums)


def sorted_square(nums):
    n = len(nums)
    l = 0
    r = n - 1
    res = [None] * n
    i = n - 1
    while l <= r:
        if abs(nums[l]) >= abs(nums[r]):
            res[i] = nums[l] * nums[l]
            l += 1
        else:
            res[i] = nums[r] * nums[r]
            r -= 1
        i -= 1
    return res


def sorted_square(nums):
    n = len(nums)
    l = 0
    r = n - 1
    res = [None] * n
    while l <= r:
        if abs(nums[l]) >= abs(nums[r]):
            res[r - l] = nums[l] * nums[l]
            l += 1
        else:
            res[r - l] = nums[r] * nums[r]
            r -= 1
    return res


print(sorted_square([-4, -1, 0, 3, 10]))
