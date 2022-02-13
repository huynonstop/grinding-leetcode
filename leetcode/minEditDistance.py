class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        if not word1 or not word2:
            return len(word1) or len(word2)
        return min_dis_dp(word1, word2)


# Use f[i][j] to represent the shortest edit distance between word1[0, i) and word2[0, j).
# Then compare the last character of word1[0, i) and word2[0, j),
# which are c and d respectively(c == word1[i-1], d == word2[j-1]):

# if c == d, then:
#     f[i][j] = f[i-1][j-1]

# Otherwise we can use three operations to convert word1 to word2:

# (a) if we replaced c with d: f[i][j] = f[i-1][j-1] + 1

# (b) if we added d after c: f[i][j] = f[i][j-1] + 1

# (c) if we deleted c: f[i][j] = f[i-1][j] + 1

# Note that f[i][j] only depends on f[i-1][j-1], f[i-1][j] and f[i][j-1], therefore we can reduce the space to O(n) by using only the(i-1)th array and previous updated element(f[i][j-1]).


def min_dis_bf(word1, word2):
    def helper(word1, word2, i, j):
        if len(word1) == i:
            return len(word2) - j
        if len(word2) == j:
            return len(word1) - i
        if word1[i] == word2[j]:
            return helper(word1, word2, i+1, j+1)

        insert = helper(word1, word2, i, j+1)
        delete = helper(word1, word2, i + 1, j)
        replace = helper(word1, word2, i+1, j+1)
        return min(insert, delete, replace) + 1
    return helper(word1, word2, 0, 0)


def min_dis_memo(word1, word2):
    n = len(word1)
    m = len(word2)
    memo = [[-1] * m for _ in range(n)]

    def helper(word1, word2, i, j):
        if len(word1) == i:
            return len(word2) - j
        if len(word2) == j:
            return len(word1) - i
        if memo[i][j] != -1:
            return memo[i][j]
        if word1[i] == word2[j]:
            memo[i][j] = helper(word1, word2, i+1, j+1)
        else:
            insert = helper(word1, word2, i, j+1)
            delete = helper(word1, word2, i + 1, j)
            replace = helper(word1, word2, i+1, j+1)
            memo[i][j] = min(insert, delete, replace) + 1
        return memo[i][j]

    return helper(word1, word2, 0, 0)


def min_dis_dp(word1, word2):
    n = len(word1)
    m = len(word2)
    dp = [[-1] * (m+1) for _ in range(n+1)]

    for i in range(n+1):
        dp[i][0] = i
    for j in range(m+1):
        dp[0][j] = j

    for i in range(n):
        for j in range(m):
            if word1[i] == word2[j]:
                dp[i+1][j+1] = dp[i][j]
            else:
                dp[i+1][j+1] = min(
                    dp[i][j], dp[i+1][j], dp[i][j+1]
                ) + 1

    return dp[n][m]


Solution().minDistance("horse",
                       "ros")
