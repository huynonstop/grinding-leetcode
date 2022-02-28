class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        return buy_fee(prices, fee)


def buy_fee(prices, fee):
    n = len(prices)
    if n <= 1:
        return 0
    buy_dp = [0] * n
    buy_dp[0] = -prices[0] - fee
    sell_dp = [0] * n
    for i in range(1, n):
        # skip or buy
        buy_dp[i] = max(buy_dp[i-1], -prices[i] + sell_dp[i-1] - fee)
        # skip or sell
        sell_dp[i] = max(sell_dp[i - 1], prices[i] + buy_dp[i - 1])
    return sell_dp[n - 1]


def sell_fee(prices, fee):
    n = len(prices)
    if n <= 1:
        return 0
    buy_dp = [0] * n
    buy_dp[0] = -prices[0]
    sell_dp = [0] * n
    for i in range(1, n):
        # skip or buy
        buy_dp[i] = max(buy_dp[i-1], -prices[i] + sell_dp[i-1])
        # skip or sell
        sell_dp[i] = max(
            sell_dp[i - 1],
            prices[i] + buy_dp[i - 1] - fee)
    return sell_dp[n - 1]
