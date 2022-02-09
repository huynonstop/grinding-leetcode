from bisect import bisect_left
from typing import List


class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        return number_lis(nums)

# https://leetcode.com/problems/number-of-longest-increasing-subsequence/discuss/107295/9ms-C%2B%2B-Explanation%3A-DP-%2B-Binary-search-%2B-prefix-sums-O(NlogN)-time-O(N)-space
# https://leetcode.com/problems/number-of-longest-increasing-subsequence/discuss/107318/C%2B%2B-DP-with-explanation-O(n2)


def number_lis(nums):
    n = len(nums)
    m = 1
    ans = 0
    count = [1] * n
    lis = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                if lis[j] + 1 > lis[i]:
                    lis[i] = lis[j] + 1
                    count[i] = count[j]
                elif lis[j] + 1 == lis[i]:
                    count[i] += count[j]
        m = max(m, lis[i])

    for i in range(n):
        if lis[i] == m:
            ans += count[i]
    return ans
