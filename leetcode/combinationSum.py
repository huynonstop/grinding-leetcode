class Solution:
    def combinationSum(self, candidates: List[int],
                       target: int) -> List[List[int]]:
        return combination_sum(candidates, target)


def combination_sum(candidates, target):
    n = len(candidates)
    rs = []
    t = []
    candidates.sort()

    def backtrack(start, path, cur_sum):
        if cur_sum == target:
            # rs.append(t)
            rs.append(path)
            return
        if cur_sum > target:
            return
        for i in range(start, n):
            # t.append(candidates[i])
            backtrack(
                i, path + [candidates[i]],
                cur_sum + candidates[i])
            # t.pop()

    backtrack(0, [], 0)
    return rs


combination_sum()
