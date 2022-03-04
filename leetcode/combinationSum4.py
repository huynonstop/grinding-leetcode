class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        return bf(nums, target)


def bf(nums, target):
    def helper(cur):
        if cur == 0:
            return 1
        if cur < 0:
            return 0
        res = 0
        for num in nums:
            res += helper(cur - num)
        return res
    return helper(target)


def memo(nums, target):
    mm = [-1] * (target+1)
    mm[0] = 1

    def helper(cur):
        if mm[cur] != -1:
            return mm[cur]
        res = 0
        for num in nums:
            if cur - num >= 0:
                res += helper(cur - num)
        mm[cur] = res
        return res

    return helper(target)


def dp(nums, target):
    dp = [0] * (target + 1)
    dp[0] = 1

    for i in range(1, target+1):
        for num in nums:
            if i - num >= 0:
                dp[i] += dp[i - num]
    return dp[-1]
