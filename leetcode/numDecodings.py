class Solution:
    def numDecodings(self, s: str) -> int:
        return num_decoding_bf(s)


def num_decoding_bf(s):
    n = len(s)

    def helper(i):
        if i == n:
            return 1
        if s[i] == '0':
            return 0
        res = helper(i + 1)
        if i < n - 1 and (s[i] == '1' or (s[i] == '2' and s[i+1] < '7')):
            res += helper(i + 2)
        return res

    return helper(0)


def num_decoding_memo(s):
    n = len(s)
    memo = [-1] * n
    memo.append(1)

    def helper(i):
        if memo[i] > -1:
            return memo[i]
        if s[i] == '0':
            memo[i] = 0
            return 0
        res = helper(i + 1)
        if i < n - 1 and (s[i] == '1' or (s[i] == '2' and s[i+1] < '7')):
            res += helper(i + 2)
        memo[i] = res
        return res

    return helper(0)


def num_decoding_dp(s):
    n = len(s)
    dp = [-1] * n
    dp.append(1)

    for i in range(n - 1, -1, -1):
        if s[i] == '0':
            dp[i] = 0
        else:
            dp[i] = dp[i + 1]
            if i < n - 1 and (s[i] == '1'
                              or (s[i] == '2' and s[i + 1] < '7')):
                dp[i] += dp[i + 2]

    return dp[0] if s else 0


def num_decoding_dp_op(s):
    n = len(s)
    next1 = 1
    next2 = 0
    for i in range(n - 1, -1, -1):
        cur = 0 if s[i] == '0' else next1
        if i < n - 1 and (s[i] == '1'
                          or (s[i] == '2' and s[i + 1] < '7')):
            cur += next2
        next1, next2 = cur, next1
    return next1
