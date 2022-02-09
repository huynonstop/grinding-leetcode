from bisect import bisect_left
from typing import List


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        return lis_dp(nums)


# brute force

# class Solution {
#     public:
#     int lengthOfLIS(vector < int > & nums) {
#         return solve(nums, 0, INT_MIN)
#     }
#     int solve(vector < int > & nums, int i, int prev) {
#         // cant pick any more elements
#         if(i >= size(nums)) return 0
#         // try skipping the current element
#         int take = 0, dontTake = solve(nums, i + 1, prev)
#         // or pick it if it is greater than previous picked element
#         if(nums[i] > prev) take = 1 + solve(nums, i + 1, nums[i])
#         // return whichever choice gives max LIS
#         return max(take, dontTake)
#     }
# }

# https://leetcode.com/problems/longest-increasing-subsequence/discuss/1326308/C%2B%2BPython-DP-Binary-Search-BIT-Solutions-Picture-explain-O(NlogN)

def lis_dp(nums):
    n = len(nums)
    dp = [1] * n
    for i in range(n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)


def lis_greedy_bs(nums):
    sub = []
    for x in nums:
        if len(sub) == 0 or sub[-1] < x:
            sub.append(x)
        else:
            # Find the index of the smallest number >= x
            i = bisect_left(sub, x)
            sub[i] = x
    return len(sub)
