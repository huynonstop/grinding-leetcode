from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return permute(nums)


def permute(nums):
    n = len(nums)
    res = []
    cur = []
    seen = set()

    def backtrack(need):
        if need == 0:
            res.append(list(cur))
            return

        for num in nums:
            if num not in seen:
                cur.append(num)
                seen.add(num)
                backtrack(need - 1)
                cur.pop()
                seen.remove(num)

    backtrack(n)
    return res


permute([1, 2, 3])
