from typing import List


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        word_s = set(wordDict)
        return wordBreak(s, word_s)

# https://leetcode.com/problems/word-break/discuss/43886/Evolve-from-brute-force-to-optimal-a-review-of-all-solutions


def wordBreak(s, word_s):
    n = len(s)
    dp = [False] * n
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(0, i):
            if dp[j] and s[j:i] in word_s:
                dp[i] = True
                break
    return dp[n]
