# class Solution:
#     def change(self, amount: int, coins: List[int]) -> int:
#         return change_dp(amount, coins)


def change_bf(amount, coins):
    if amount == 0:
        return 1

    # If we went over our amount or we have no more coins left
    if amount < 0 or len(coins) == 0:
        return 0

    # Our solutions can be divided into two sets,
    #   1) Solutions that cointain the coin at the end of the coins array
    #   2) Solutions that don't contain that coin
    return change_bf(amount - coins[-1],
                     coins) + change_bf(amount, coins[: -1])


def change_dp(amount, coins):
    n = len(coins)
    dp = [[0] * (amount + 1) for _ in range(n+1)]
    dp[0][0] = 1
    for i in range(1, n+1):
        dp[i][0] = 1
        for j in range(1, amount + 1):
            dp[i][j] = dp[i-1][j]
            if j >= coins[i-1]:
                dp[i][j] += dp[i][j-coins[i-1]]
    return dp[-1][-1]


change_dp(5,
          [1, 2, 5])
