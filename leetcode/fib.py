class Solution:
    def fib(self, n: int) -> int:
        return fib_bf(n)


def fib_bf(n):
    if n == 0 or n == 1:
        return n
    return fib_bf(n-1) + fib_bf(n-2)


def fib_memo(n):
    memo = [None] * (n + 1)
    memo[0] = 0
    memo[1] = 1

    def helper(n):
        if memo[n] is not None:
            return memo[n]
        memo[n] = helper(n-1) + helper(n-2)
        return memo[n]

    return helper(n)


def fib_dp(n):
    if n == 0 or n == 1:
        return n
    dp_prev_1 = 0
    dp_prev_2 = 1
    for i in range(1, n):
        dp_prev_1, dp_prev_2 = dp_prev_2, dp_prev_1 + dp_prev_2
    return dp_prev_2


fib_dp(3)
