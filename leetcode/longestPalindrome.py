class Solution:
    def longestPalindrome(self, s: str) -> str:
        return longest_palindrome_substr_dp(s)

# O(n^3)


def longest_palindrome_substr_bf(str):
    n = len(str)
    m = 0
    # for s in range(n):
    #   for e in range(s,n):
    #       if check_substr(str,s,e):
    #           m = max(len(substr(str,s,e)))

# O(n^2)


def longest_palindrome_substr_dp(str):
    n = len(str)
    dp = [[False] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = True

    ans = (0, 0)

    for i in range(n-1, -1, -1):
        for j in range(i + 1, n):
            if str[i] == str[j]:
                if j - i == 1 or dp[i+1][j-1]:
                    dp[i][j] = True
                    l = j - i + 1
                    if ans[1] - ans[0] + 1 < l:
                        ans = (i, j)

    return str[ans[0]: ans[1] + 1]


def longest_palindrome_substr_2pointer(str):
    n = len(str)
    ans = (0, 0)
    for i in range(n):
        r = i
        while r < n and str[i] == str[r]:
            # "aaa"
            r += 1

        l = i - 1
        while l >= 0 and r < n and str[l] == str[r]:
            l -= 1
            r += 1

        if r - l > ans[1] - ans[0]:
            ans = (l, r)

    return str[ans[0] + 1: ans[1]]


longest_palindrome_substr_2pointer("babad")
