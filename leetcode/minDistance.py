class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        return len(word1) + len(word2) - 2 * lcs_dp(word1, word2)


def lcs_dp(text1, text2):
    n = len(text1)
    m = len(text2)

    dp = [[0] * (m+1) for _ in range(n+1)]
    for i, c1 in enumerate(text1):
        for j, c2 in enumerate(text2):
            if c1 == c2:
                dp[i+1][j+1] = 1 + dp[i][j]
            else:
                dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])

    return dp[-1][-1]
