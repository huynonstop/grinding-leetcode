# class Solution:
#     def minFallingPathSum(self, matrix: List[List[int]]) -> int:
#         return min_path_sum_bf(matrix)


def min_path_sum_bf(matrix):
    n = len(matrix)

    def helper(i, j):
        if i == n - 1:
            return matrix[i][j]
        mn = float('inf')
        for col in range(max(0, j - 1), min(j+2, n)):
            mn = min(mn, helper(i+1, col))
        return matrix[i][j] + mn

    res = float('inf')
    for i in range(n):
        res = min(res, helper(0, i))
    return res


def min_path_sum_memo(matrix):
    n = len(matrix)

    def helper(i):
        if i < 0:
            return
        for col in range(n):
            matrix[i][col] += min(
                matrix[i + 1][max(0, col - 1): min(n, col + 2)])
        helper(i-1)

    helper(n - 2)
    return min(matrix[0])


def min_path_sum_memo_2(matrix):
    n = len(matrix)

    def helper(i):
        if i == n:
            return
        for col in range(n):
            matrix[i][col] += min(
                matrix[i - 1][max(0, col - 1): min(n, col + 2)])
        helper(i+1)

    helper(1)
    return min(matrix[0])


def min_path_sum_dp(matrix):
    n = len(matrix)
    for row in range(1, n):
        for col in range(n):
            matrix[row][col] += min(matrix[row-1]
                                    [max(0, col - 1): min(n, col + 2)])
    return min(matrix[-1])


min_path_sum_dp(
    [[2, 1, 3], [6, 5, 4], [7, 8, 9]])
