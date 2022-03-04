class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        counter = [0] * n
        for truster, trusted in trust:
            counter[truster - 1] -= 1
            counter[trusted - 1] += 1

        for i, count in enumerate(counter):
            if count == n - 1:
                return i + 1
        return -1
