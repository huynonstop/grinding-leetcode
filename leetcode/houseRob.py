class Solution:
    def rob(self, nums: List[int]) -> int:
        return rob(nums)

# https://leetcode.com/problems/house-robber-ii/discuss/59934/Simple-AC-solution-in-Java-in-O(n)-with-explanation


def rob(nums):
    n = len(nums)

    def helper(l, r):
        prev1 = 0
        prev2 = 0

        for i in range(l, r):
            t = prev1
            prev1 = max(prev2 + nums[i], prev1)
            prev2 = t

        return prev1

    return max(helper(0, n - 1), helper(1, n))
