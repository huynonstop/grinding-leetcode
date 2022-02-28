class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        return max_len(nums)


def max_len(nums):
    pos_len = neg_len = 0
    res = 0
    for num in nums:
        if num == 0:
            pos_len = neg_len = 0
        elif num > 0:
            pos_len += 1
            neg_len = neg_len + 1 if neg_len else 0
        else:
            pos_len, neg_len = neg_len + 1 if neg_len else 0, pos_len + 1
        res = max(res, pos_len)
    return res
