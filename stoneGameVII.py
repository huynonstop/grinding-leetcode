from typing import List
from itertools import accumulate
# https://leetcode.com/problems/stone-game-vii/discuss/970268/C%2B%2BPython-O(n-*-n)

class Solution:
    def stoneGameVII(self, s: List[int]) -> int:
        dp = [[0] * len(s) for _ in range(len(s))]
        p_sum = [0] + list(accumulate(s))
        for i in range(len(s) - 2, -1, -1):
            for j in range(i + 1, len(s)):
                dp[i][j] = max(p_sum[j + 1] - p_sum[i + 1] - dp[i + 1][j],
                               p_sum[j] - p_sum[i] - dp[i][j - 1])
        return dp[0][len(s) - 1]


class Solution:
    def stoneGameVII(self, s: List[int]) -> int:
        dp = [[0] * len(s) for _ in range(len(s))]
        p_sum = [0] + list(accumulate(s))

        def dfs(i: int, j: int) -> int:
            if i == j:
                return 0
            if dp[i][j] == 0:
                sum = p_sum[j + 1] - p_sum[i]
                dp[i][j] = max(sum - s[i] - dfs(i + 1, j),
                               sum - s[j] - dfs(i, j - 1))
            return dp[i][j]

        res = dfs(0, len(s) - 1)
        return res


Solution().stoneGameVII([5, 3, 1, 4, 2])
