class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        return word_patter_2_pointer(pattern, s)


def word_patter_2_pointer(pattern, str: str):
    words = str.split(' ')
    n1, n2 = len(pattern), len(words)
    d = dict()
    s = set()
    i = 0
    while i < n1 and i < n2:
        if d[pattern[i]] in d:
            if d[pattern[i]] != words[i]:
                return False
        elif words[i] in s:
            return False
        else:
            d[pattern[i]] = words[i]
            s.add(words[i])
    return True
