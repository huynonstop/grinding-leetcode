class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        return max_profix_bf(prices)


def max_profix_bf(prices):
    n = len(prices)

    def helper(i, canBuy):
        if i >= n:
            return 0
        skip = helper(i + 1, canBuy)
        not_skip = 0
        if canBuy:
            not_skip = -prices[i] + helper(i+1, False)  # buy
        else:
            not_skip = prices[i] + helper(i+2, True)  # sell
        return max(skip, not_skip)

    return helper(0, True)


def max_profix_memo(prices):
    n = len(prices)
    memo_buy = [-1] * (n+1)
    memo_sell = [-1] * (n+1)

    def helper(i, canBuy):
        if i >= n:
            return 0
        memo = memo_buy if canBuy else memo_sell
        if memo[i] != -1:
            return memo[i]
        skip = helper(i+1, canBuy)
        not_skip = 0
        if canBuy:
            not_skip = -prices[i] + helper(i+1, False)  # buy
        else:
            not_skip = prices[i] + helper(i+2, True)  # sell

        memo[i] = max(skip, not_skip)
        return memo[i]
    return helper(0, True)


def max_profix_dp(prices):
    n = len(prices)
    dp_buy = [-1] * (n+2)
    dp_sell = [-1] * (n+2)
    for i in range(n+1, -1, -1):
        if i >= n:
            dp_buy[i] = 0
            dp_sell[i] = 0
        else:
            dp_sell[i] = max(
                dp_sell[i + 1],
                prices[i] + dp_buy[i + 2])  # skip or sell

            dp_buy[i] = max(
                dp_buy[i+1],
                -prices[i] + dp_sell[i+1])  # skip or buy
    return dp_buy[0]


def max_profix_dp_op(prices):
    buy, pre_buy = float('-inf'), 0
    sell, pre_sell = 0, 0
    for p in prices:
        pre_buy = buy
        buy = max(-p + pre_sell, buy)
        pre_sell = sell
        sell = max(p + pre_buy, sell)
    return sell
