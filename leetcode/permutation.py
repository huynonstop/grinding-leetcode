from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        return permute_unique(nums)


# https://leetcode.com/problems/permutations-ii/discuss/18602/9-line-python-solution-with-1-line-to-handle-duplication-beat-99-of-others-%3A-)

def permute_unique(nums):
    rs = []
    nums.sort()

    def dfs(left_nums, path):
        if not left_nums:
            rs.append(path)
            return
        for i in range(len(left_nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            dfs(left_nums[:i] + left_nums[i+1:],
                path + [left_nums[i]])

    dfs(nums, [])
    return rs


def permute_unique(nums):
    n = len(nums)
    rs = []
    used = [False] * n
    t = []
    nums.sort()

    def backtrack():
        if len(t) == n:
            rs.append(t[:])
            return
        for i in range(n):
            if used[i]:
                continue
            if used[i - 1] and i > 0 and nums[i] == nums[i - 1]:
                continue
            used[i] = True
            t.append(nums[i])
            backtrack()
            used[i] = False
            t.pop()

    backtrack()
    return rs


permute_unique([1, 1, 2])
