from typing import Counter


class Solution:
    def longestPalindrome(self, s: str) -> int:
        return longest_palindrome(s)


def longest_palindrome_counter(str):
    counter = Counter(str)
    res = 0
    for ch in counter:
        if res % 2 == 0:
            res += counter[ch]
        else:
            res += counter[ch] >> 1 << 1
    return res


def longest_palindrome(str):
    s = set()
    res = 0
    for ch in str:
        if ch in s:
            s.remove(ch)
            res += 2
        else:
            s.add(ch)
    return res + 1 if s else res


def longest_palindrome_set(str):
    s = set()
    for ch in str:
        if ch in s:
            s.remove(ch)
        else:
            s.add(ch)
    return len(str) - len(s) + 1 if s else len(str)


longest_palindrome("bb")
