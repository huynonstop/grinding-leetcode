class Solution:
    def climbStairs(self, n: int) -> int:
        return climb_stairs(n)

# Top down, brute force - TLE


def climb_stairs_no_memo(n):
    if n == 0:
        return 1
    if n < 0:
        return 0
    return climb_stairs_no_memo(
        n - 1) + climb_stairs_no_memo(
        n - 2)


def climb_stairs_no_memo_2(n):
    if n <= 2:
        return n
    return climb_stairs_no_memo_2(
        n - 1) + climb_stairs_no_memo_2(
        n - 2)

# Top down + memorization (list)


def climb_stairs(n):
    memo = [None] * (n + 1)
    memo[0] = 1

    def dp(n):
        if n < 0:
            return 0
        if memo[n]:
            return memo[n]
        memo[n] = climb_stairs(n - 1) + climb_stairs(n - 2)
        return memo[n]

    return dp(n)


def climb_stairs_2(n):
    if n <= 2:
        return n
    memo = [None] * n
    memo[0] = 1
    memo[1] = 2

    def dp(n):
        if not memo[n]:
            memo[n] = dp(
                n - 1) + dp(n - 2)
        return memo[n]

    return dp(n - 1)

# Bottom up, constant space


def climb_stairs_dp_optimize(n):
    if n <= 2:
        return n
    cur, pre_1_step, pre_2_step = 0, 2, 1
    for i in range(3, n + 1):
        cur = pre_1_step + pre_2_step
        pre_2_step = pre_1_step
        pre_1_step = cur
    return cur


climb_stairs(2)
