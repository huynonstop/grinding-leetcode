class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        return dp_square(matrix)


def dp_square(matrix):
    r = len(matrix)
    c = len(matrix[0])
    dp = [[0] * (c+1) for _ in range(r+1)]
    max_side = 0
    for i in range(r):
        for j in range(c):
            if matrix[i][j] == '1':
                dp[i+1][j+1] = min(dp[i][j], dp[i+1]
                                   [j], dp[i][j+1]) + 1
                max_side = max(max_side, dp[i+1][j+1])
    return max_side ** 2


def dp_square_op(matrix):
    r = len(matrix)
    c = len(matrix[0])
    dp = [0] * (c+1)
    pre = 0
    max_side = max(dp)
    for i in range(r):
        for j in range(c):
            temp = dp[j+1]
            if matrix[i][j] == '1':
                dp[j + 1] = min(pre, dp[j + 1], dp[j]) + 1
                max_side = max(max_side, dp[j + 1])
            else:
                dp[j + 1] = 0
            pre = temp
    return max_side ** 2
