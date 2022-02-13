from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        return coin_change_dp_op(coins, amount)


def coin_change_dp_op(coins, amount):
    dp = [0] + [float('inf') for i in range(amount)]
    for i in range(1, amount+1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i-coin] + 1)
    if dp[-1] == float('inf'):
        return -1
    return dp[-1]
