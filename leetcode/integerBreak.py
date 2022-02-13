import math


class Solution:
    def integerBreak(self, n: int) -> int:
        return integer_break_dp(n)


def integer_break_dp(n):
    case = [0, 0, 1, 2, 4, 6, 9]
    if n < 7:
        return case[n]
    dp = case + [0] * (n-6)
    for i in range(7, n+1):
        dp[i] = 3*dp[i-3]
    return dp[-1]


def integer_break_math(n):
    return int(math.pow(2, (-n) % 3) * math.pow(3, (n-1) % 3 + (n-4)//3)) if n > 3 else n-1
