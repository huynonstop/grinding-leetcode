class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        return wiggle_max_len_dp(nums)


def wiggle_max_len_dp(nums):
    n = len(nums)
    max_peak = min_peak = 1
    for i in range(1, n):
        if nums[i] < nums[i-1]:
            max_peak = min_peak + 1
        elif nums[i] > nums[i-1]:
            min_peak = max_peak + 1
    return max(max_peak, min_peak)


def wiggle_max_len_greedy(nums):
    n = len(nums)
    res = 1
    pre_diff = 0

    for i in range(1, n):
        cur_diff = nums[i] - nums[i-1]
        # this is a peak
        if (cur_diff > 0 and pre_diff <= 0) or (cur_diff < 0 and pre_diff >= 0):
            res += 1
            pre_diff = cur_diff

    return res
