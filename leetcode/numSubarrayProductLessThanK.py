from typing import List


class Solution:
    def numSubarrayProductLessThanK(
            self, nums: List[int],
            k: int) -> int:
        return subarray_products(nums, k)


def subarray_products(nums, k):
    if k <= 1:
        return 0
    res = 0
    product = 1
    begin = 0

    for end, val in enumerate(nums):
        product *= val
        while product >= k:
            product /= nums[begin]
            begin += 1
        res += end - begin + 1

    return res
