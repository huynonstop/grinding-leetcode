class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        return lcs_dp(text1, text2)


def lcs_memo(text1, text2):
    n = len(text1)
    m = len(text2)
    memo = [[None] * (m+1) for _ in range(n+1)]

    def helper(i, j):
        if i == n or j == m:
            return 0

        if memo[i][j] is not None:
            return memo[i][j]

        if text1[i] == text2[j]:
            memo[i][j] = 1 + helper(i + 1, j + 1)
        else:
            memo[i][j] = max(helper(i+1, j), helper(i, j + 1))
        return memo[i][j]


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


def lcs_dp_op(text1, text2):
    if len(text1 < text2):
        text1, text2 = text2, text1

    n = len(text1)
    m = len(text2)

    dp = [0] * (m + 1)
    for c1 in text1:
        prevRow, prevRowPrevCol = 0, 0
        for j, c2 in enumerate(text2):
            prevRow, prevRowPrevCol = dp[j + 1], prevRow
            if c1 == c2:
                dp[j + 1] = prevRowPrevCol + 1
            else:
                dp[j+1] = max(dp[j], prevRow)
    return dp[-1]


lcs_dp_op("psnw",
          "vozsh")
