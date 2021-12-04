from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        move_zeroes(nums)


def move_zeroes(nums):
    n = len(nums)

    l = 0  # i_most_left_zero
    r = 0  # i

    while r < n:
        if nums[r] != 0:
            if nums[l] == 0:  # l != r
                nums[l], nums[r] = nums[r], nums[l]
            l += 1
        r += 1

        # if nums[l] == 0 and nums[r] == 0:
        #     r += 1
        # elif nums[l] == 0:
        #     nums[l], nums[r] = nums[r], nums[l]
        #     l += 1
        #     r += 1
        # else:
        #     l += 1
        #     r += 1


move_zeroes([0, 1, 2, 0, 3, 4])
