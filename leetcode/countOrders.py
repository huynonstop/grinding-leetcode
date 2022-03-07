import functools


class Solution:
    def countOrders(self, n: int) -> int:
        return count_memo(n)


def count_math(n):
    MOD = 1_000_000_007
    ans = 1

    for i in range(1, n + 1):
        # Ways to arrange all pickups, 1*2*3*4*5*...*n
        ans = ans * i
        # Ways to arrange all deliveries, 1*3*5*...*(2n-1)
        ans = ans * (2 * i - 1)
        ans %= MOD

    return ans


def count_memo(n):
    MOD = 10 * 9 + 7

    @functools.cache
    def total_ways_memo(left_to_pick, left_to_delivery):
        if left_to_pick == left_to_delivery == 0:
            return 1
        if left_to_pick < 0 or left_to_delivery < 0 or left_to_delivery < left_to_pick:
            return 0
        ans = left_to_pick * total_ways_memo(
            left_to_pick - 1, left_to_delivery) % MOD
        ans += (left_to_delivery - left_to_pick) * total_ways_memo(
            left_to_pick, left_to_delivery - 1) % MOD
        return ans % MOD
    return total_ways_memo(n, n)


def count_dp(n):
    dp = [[0] * (n + 1) for i in range(n + 1)]
    MOD = 10 * 9 + 7

    for unpicked in range(n+1):
        for undelivered in range(unpicked, n+1):

            if unpicked == undelivered == 0:
                dp[unpicked][undelivered] = 1
                continue

            if unpicked > 0:
                dp[unpicked][undelivered] += unpicked * dp[unpicked -
                                                           1][undelivered]
            dp[unpicked][undelivered] %= MOD

            if undelivered > unpicked:
                dp[unpicked][undelivered] += (
                    undelivered - unpicked) * dp[unpicked][undelivered - 1]
            dp[unpicked][undelivered] %= MOD

    return dp[-1][-1] % MOD


def count_dp(n):
    MOD = 1_000_000_007
    dp = [[0] * (n + 1) for i in range(n + 1)]

    for unpicked in range(n + 1):
        for undelivered in range(unpicked, n + 1):
            if unpicked == undelivered == 0:
                dp[unpicked][undelivered] = 1
                continue

            if unpicked > 0:
                dp[unpicked][undelivered] += unpicked * dp[unpicked -
                                                           1][undelivered]
            dp[unpicked][undelivered] %= MOD

            if undelivered > unpicked:
                dp[unpicked][undelivered] += (
                    undelivered - unpicked) * dp[unpicked][undelivered - 1]
            dp[unpicked][undelivered] %= MOD

    return dp[n][n]
