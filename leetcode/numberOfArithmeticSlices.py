class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        return arithmetic_slices(nums)


# Let dp[i] denote the number of arithmetic subarray ends at nums[i].
# If if nums[i-1] - nums[i-2] == nums[i] - nums[i-1]
# then we can form the Arithmetic subarray ends at nums[i].
#   So dp[i] = dp[i-1] + 1.
# For example: nums = [1, 3, 5, 7, 9]
#   dp[2] = 1 arithmetic subarrays are {1, 3, 5}
#   dp[3] = dp[2] + 1 = 2, arithmetic subarrays are {1, 3, 5, 7}, {3, 5, 7}
#   dp[4] = dp[3] + 1 = 3, arithmetic subarrays are {1, 3, 5, 7, 9}, {3, 5, 7, 9}, {5, 7, 9}

def arithmetic_slices_dp(nums):
    n = len(nums)
    dp = [0] * n
    ans = 0
    for i in range(2, n):
        if nums[i-1] - nums[i-2] == nums[i] - nums[i-1]:
            dp[i] = dp[i-1] + 1
        ans += dp[i]
    return ans


def arithmetic_slices_dp_op(nums):
    n = len(nums)
    dp, prev = 0, 0
    ans = 0
    for i in range(2, n):
        if nums[i-1] - nums[i-2] == nums[i] - nums[i-1]:
            dp = prev + 1
        ans += dp
        prev = dp
        dp = 0
    return ans
