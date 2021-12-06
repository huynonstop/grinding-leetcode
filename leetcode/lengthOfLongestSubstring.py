class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        return len_of_longest_substring_no_repeat(s)


def len_of_longest_substring_no_repeat(s):
    n = len(s)
    res = 0
    sub_str = set()
    l = 0
    r = 0
    while r < n:
        if s[r] not in sub_str:
            sub_str.add(s[r])
            res = max(res, len(sub_str))
            r += 1
        else:
            sub_str.remove(s[l])
            l += 1

    return res


def len_of_longest_substring_no_repeat_dict(s):
    n = len(s)
    if n == 0:
        return 0

    d = dict()
    m = 0
    l = 0
    r = 0
    while r < n:
        if s[r] in d:
            l = max(l, d[s[r]] + 1)
        d[s[r]] = r
        m = max(m, r - l + 1)
        r += 1

    return m


len_of_longest_substring_no_repeat_dict('abcabcbb')
