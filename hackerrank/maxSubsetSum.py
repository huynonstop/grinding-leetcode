# Complete the maxSubsetSum function below.
def maxSubsetSum_bf(arr):
    n = len(arr)

    def helper(i):
        if i >= n:
            return 0
        return max(arr[i], helper(i+1), arr[i] + helper(i+2))

    return max(helper(0), helper(1))


def maxSubsetSum_memo(arr):
    n = len(arr)
    memo = [None] * n

    def helper(i):
        if i >= n:
            return 0
        if memo[i] is not None:
            return memo[i]
        memo[i] = max(arr[i], arr[i] + helper(i+2), helper(i+1))
        return memo[i]
    return max(helper(0), helper(1))


def maxSubsetSum_dp(arr):
    n = len(arr)
    dp = [None] * n
    dp[0] = arr[0]
    dp[1] = max(arr[0], arr[1])
    for i in range(2, n):
        dp[i] = max(dp[i-1], dp[i-2] + arr[i], arr[i])
    return dp[-1]


def maxSubsetSum_dp_op(arr):
    prev_2 = arr[0]
    prev = max(arr[0], arr[1])

    for num in arr[2:]:
        cur = max(num,  prev_2 + num, prev)
        prev_2 = prev
        prev = cur
    return prev


maxSubsetSum_memo([3, 7, 4, 6, 5])
