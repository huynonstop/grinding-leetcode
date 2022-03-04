class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        return longest_bf(s)


def longest_bf(s):
    n = len(s)

    def helper(l, r):
        if l > r:
            return 0
        if l == r:
            return 1
        if s[l] == s[r]:
            return 2 + helper(l+1, r-1)
        return max(helper(l, r-1), helper(l+1, r))

    return helper(0, n - 1)


def longest_memo(s):
    n = len(s)
    memo = [[0]*n for _ in range(n)]

    def helper(l, r):
        if l > r:
            return 0
        if l == r:
            return 1
        if memo[l][r]:
            return memo[l][r]
        memo[l][r] = 2 + helper(l+1, r-1) if s[l] == s[r] else max(
            helper(l, r-1), helper(l+1, r))
        return memo[l][r]

    return helper(0, n-1)


def longest_dp(s):
    n = len(s)
    dp = [[0]*n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i+1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i+1][j-1] + 2
            else:
                dp[i][j] = max(dp[i+1][j], dp[i][j-1])
    return dp[0][n-1]


def longest_dp_op(s):
    n = len(s)
    dp, pre_dp = [0]*n, [0]*n
    for i in range(n - 1, -1, -1):
        dp[i] = 1
        for j in range(i+1, n):
            if s[i] == s[j]:
                dp[j] = pre_dp[j - 1] + 2
            else:
                dp[j] = max(pre_dp[j], dp[j - 1])
        dp, pre_dp = pre_dp, dp
    return pre_dp[-1]
