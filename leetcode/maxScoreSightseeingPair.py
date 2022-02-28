class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        max_val = res = 0
        for v in values:
            res = max(res, max_val + v)
            max_val = max(max_val, v) - 1
        return res
