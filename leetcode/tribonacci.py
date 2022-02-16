class Solution:
    def tribonacci(self, n: int) -> int:
        return trib_dp(n)


def trib_bf(n):
    if n == 0:
        return 0
    if n == 2 or n == 1:
        return 1
    return trib_bf(n-1) + trib_bf(n-2) + trib_bf(n-3)


def trib_memo(n):
    memo = dict()
    memo[0] = 0
    memo[1] = 1
    memo[2] = 1

    def helper(n):
        if n in memo:
            return memo.get(n)
        prev_1 = memo[n-1] if n-1 in memo else helper(n-1)
        prev_2 = memo[n-2] if n-2 in memo else helper(n-2)
        prev_3 = memo[n-3] if n-3 in memo else helper(n-3)
        memo[n] = prev_1 + prev_2 + prev_3
        return memo[n]

    return helper(n)


def trib_dp(n):
    if n == 0:
        return 0
    if n == 2 or n == 1:
        return 1

    prev_1 = 0
    prev_2 = 1
    prev_3 = 1

    for i in range(2, n):
        prev_1, prev_2, prev_3 = prev_2, prev_3, prev_1 + prev_2 + prev_3

    return prev_3


def trib_dp_op(n):
    prev_1, prev_2, prev_3 = 1, 0, 0
    for _ in range(n):
        prev_1, prev_2, prev_3 = prev_2, prev_3, prev_1 + prev_2 + prev_3
    return prev_3


trib_memo(4)
