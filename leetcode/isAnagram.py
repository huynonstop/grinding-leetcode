from collections import Counter
from itertools import count


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return is_anagram(s, t)


def is_anagram(s, t):
    n = len(s)
    c_s = Counter(s)
    for c in t:
        if c not in c_s or c_s[c] == 0:
            return False
        n -= 1
        c_s[c] -= 1
    return n == 0


def is_anagram_alphabet(s, t):
    A = ord('a')
    counter = [0] * 26
    for c in s:
        counter[ord(c) - A] += 1

    for c in t:
        counter[ord(c) - A] -= 1

    for c in counter:
        if c != 0:
            return False
    return True
