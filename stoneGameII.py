from typing import List
from functools import lru_cache


class Solution:
    def stoneGameII(self, A: List[int]) -> int:
        N = len(A)
        for i in range(N - 2, -1, -1):
            A[i] += A[i + 1]

        @lru_cache(None)
        def dp(i, m):
            if i + 2 * m >= N: return A[i]
            return A[i] - min(
                dp(i + x, max(m, x)) for x in range(1, 2 * m + 1))

        return dp(0, 1)


# Let DP[i][m] be the maximal number of stones a player can get when the 0, 1, ..., i-1 piles have already been taken and the current M is m. Let's see how DP[i][m] can be calculated. Let's assume the total number of stones in piles i, i+1, ..., n-1 is Si.
#
# If the player takes only the first pile (piles[i], x = 1), the other player can get up to DP[i+1][max(m, 1)]. So the current player can get Si - DP[i+1][max(m, 1)].
# If the player takes the first two piles (piles[i], piles[i+1], x = 2), the other player can get up to DP[i+2][max(m, 2)]. So the current player can get Si - DP[i+2][max(m, 2)].
# ...
# If the player takes the first 2m piles (piles[i], piles[i+1], ..., piles[i+2m], x = 2m), the other player can get up to DP[i+2m][max(m, 2m)]. So the current player can get Si - DP[i+2m][max(m, 2m)].
#
# public int stoneGameII(int[] piles) {
#     int[] presum =  Arrays.copyOf(piles, piles.length);
#     for (int i = presum.length - 2; i >= 0; i--) presum[i] += presum[i + 1];
#     return dfs(presum, 1, 0, new int[piles.length][piles.length]);
# }
# private int dfs(int[] presum, int m, int p, int[][] memo) {
#     if (p + 2 * m >= presum.length) { // last player takes all
#         return presum[p];
#     }
#     if (memo[p][m] > 0) return memo[p][m];
#     int res = 0, take = 0;
#     for (int i = 1; i <= 2 * m; i++) {
#         // current take
#         take = presum[p] - presum[p + i];
#         // take max of current + what lefts from other player max take
#         res = Math.max(res, take + presum[p + i] - dfs(presum, Math.max(i, m), p + i, memo));
#     }
#     memo[p][m] = res;
#     return res;
# }