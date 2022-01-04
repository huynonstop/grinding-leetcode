class Solution:
    def combinationSum2(self, candidates: List[int],
                        target: int) -> List[List[int]]:
        return combination_sum(candidates, target)


def combination_sum(candidates, target):
    n = len(candidates)
    rs = []
    candidates.sort()

    def backtrack(start, path, cur_sum):
        if cur_sum == target:
            rs.append(path)
            return
        if cur_sum > target:
            return
        for i in range(start, n):
            if start > 0 and candidates[i] == candidates[i - 1]:
                continue
            backtrack(
                i + 1, path + [candidates[i]],
                cur_sum + candidates[i])

    backtrack(0, [], 0)
    return rs
