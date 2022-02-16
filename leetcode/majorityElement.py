from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return majority(nums)


def majority(nums):
    n = len(nums)
    res = nums[0]
    c = 1
    for i in range(1, n):
        if c == 0:
            res = nums[i]
            c += 1
        elif res == nums[i]:
            c += 1
        else:
            c -= 1
    return res


def majority_dict_count(nums):
    n = len(nums)
    res = 0
    m = 0
    d = dict()
    for i in range(n):
        c = d.get(nums[i], 0)
        d[nums[i]] = c + 1
        if d[nums[i]] > m:
            m = d[nums[i]]
            res = nums[i]
    return res
