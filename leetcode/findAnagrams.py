from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        return find_anagrams(s, p)
# https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92015/ShortestConcise-JAVA-O(n)-Sliding-Window-Solution


def find_anagrams(s, p):
    res = []

    wc = dict()
    for c in p:
        wc[c] = wc.setdefault(c, 0) + 1
    diff = len(wc)

    begin = 0
    end = 0

    while end < len(s):
        c = s[end]
        if c in wc:
            wc[c] -= 1
            if wc[c] == 0:
                diff -= 1
        end += 1

        while diff == 0:
            t = s[begin]
            if t in wc:
                wc[t] += 1
                if wc[t] > 0:
                    diff += 1
            if end - begin == len(p):
                res.append(begin)
            begin += 1

    return res


find_anagrams('cbaebabacd', 'abc')
