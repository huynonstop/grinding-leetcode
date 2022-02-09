from math import factorial


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return unique_paths(m, n)

# https://leetcode.com/problems/unique-paths/discuss/1581998/C%2B%2BPython-5-Simple-Solutions-w-Explanation-or-Optimization-from-Brute-Force-to-DP-to-Math


def unique_paths_math(m, n):
    return factorial(m+n-2) // factorial(m-1) // factorial(n-1)


def unique_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]


def unique_paths_a(m, n):
    a = [1] * n
    for i in range(1, m):
        for j in range(1, n):
            a[j] += a[j - 1]
    return a[n - 1]
