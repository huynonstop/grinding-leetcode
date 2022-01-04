class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        return subsets(nums)


def subsets(nums):
    n = len(nums)
    rs = []
    temp = []

    def backtrack(start):
        rs.append(temp[:])
        for i in range(start, n):
            if i > start and nums[i] == nums[i - 1]:
                continue
            temp.append(nums[i])
            backtrack(i + 1)
            temp.pop()
    backtrack(0)
    return rs
