from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        return product_div(nums)


def product_div(nums):
    n = len(nums)
    res = [0] * n
    zero_count = 0
    total_product = 1
    for i in range(n):
        if nums[i] == 0:
            zero_count += 1
        else:
            total_product *= nums[i]

    if zero_count > 1:
        return res

    for i in range(n):
        if zero_count:
            res[i] = total_product if nums[i] == 0 else 0
        else:
            res[i] = total_product // nums[i]
    return res

#       [1, 2, 3, 4, 5, 6, 7]
# prefix[2] = 1 * 2 * 3
# suffix[4] = 5 * 6 * 7
# res[3] = prefix[2] * suffix[4]


def product_prefix_suffix(nums):
    n = len(nums)
    res = [1] * n
    prefix = [1] * n
    suffix = [1] * n

    for i in range(n):
        prefix[i] = prefix[i-1] * nums[i]
        suffix[-1 - i] = suffix[-i] * nums[-1 - i]

    for i in range(n):
        if i > 0:
            res[i] *= prefix[i - 1]
        if i + 1 < n:
            res[i] *= suffix[i + 1]
    return res


def product_prefix_suffix_2(nums):
    n = len(nums)
    res = [1] * n
    prefix = [1] * n
    suffix = [1] * n

    for i in range(1, n):
        prefix[i] = prefix[i-1] * nums[i-1]
        suffix[-1 - i] = suffix[-i] * nums[-i]

    for i in range(n):
        res[i] *= prefix[i]
        res[i] *= suffix[i]
    return res


def product_prefix_suffix_op(nums):
    n = len(nums)

    res = [1] * n
    prefix_product = 1
    suffix_product = 1

    # for i in range(1, n):
    #     res[i] = res[i-1] * nums[i-1]

    # for i in range(n-1, -1, -1):
    #     res[i] *= suffix_product
    #     suffix_product *= nums[i]

    for i in range(n):
        res[i] *= prefix_product
        prefix_product *= nums[i]

        res[-1 - i] *= suffix_product
        suffix_product *= nums[-1 - i]

    return res


product_prefix_suffix([1, 2, 3, 4])
