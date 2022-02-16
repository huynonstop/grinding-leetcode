from collections import Counter


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        return sort(nums)

# 0, 1, and 2 to represent the color red, white, and blue


def sort_one_pass(nums):
    n = len(nums)
    red, white, blue = 0, 0, n - 1
    while white <= blue:
        if nums[white] == 0:
            nums[red], nums[white] = nums[white], nums[red]
            white += 1
            red += 1
        if nums[white] == 1:
            white += 1
        if nums[white] == 2:
            nums[white], nums[blue] = nums[blue], nums[white]
            blue -= 1


def sort(nums):
    c = Counter(nums)
    i = 0
    for color in range(3):
        if color in c:
            for _ in range(c.get(color)):
                nums[i] = color
                i += 1
