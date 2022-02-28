class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        return max_product_min_max(nums)


def max_product_min_max_2(nums):
    n = len(nums)
    r_max = r_min = r = nums[0]
    for i in range(1, n):
        r_max, r_min = max(nums[i],
                           r_max * nums[i],
                           r_min * nums[i]), min(nums[i],
                                                 r_max * nums[i],
                                                 r_min * nums[i])
        r = max(r, r_max)
    return r


def max_product_min_max(nums):
    n = len(nums)
    r_max = r_min = r = nums[0]
    for i in range(1, n):
        if nums[i] < 0:
            r_max, r_min = r_min, r_max
        r_max = max(nums[i], r_max * nums[i])
        r_min = min(nums[i], r_min * nums[i])
        r = max(r, r_max)
    return r


def max_product_prefix_suffix(nums):
    n = len(nums)
    prefix = suffix = 0
    res = nums[0]
    for i in range(n):
        prefix = (prefix if prefix else 1) * nums[i]
        suffix = (suffix if suffix else 1) * nums[-1-i]
        res = max(res, prefix, suffix)
    return res
