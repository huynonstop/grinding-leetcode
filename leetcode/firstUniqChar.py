class Solution:
    def firstUniqChar(self, s: str) -> int:
        return first_unique_char(s)


def first_unique_char(s):
    n = len(s)
    check = dict()

    for c in s:
        if c not in check:
            check[c] = True
        else:
            check[c] = False

    for i in range(n):
        if check[s[i]]:
            return i

    return -1
