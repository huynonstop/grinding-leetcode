class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        return group_anagrams(strs)


def group_anagrams(strs):
    res = dict()
    for s in strs:
        t = [0] * 26
        for ch in s:
            t[ord(ch) - ord('a')] += 1

        k = tuple(t)
        res[k] = res.get(k, []) + [s]
    return res.values()


def group_anagrams_hash(strs):
    res = dict()
    for s in strs:
        t = [0] * 26
        for ch in s:
            t[ord(ch) - ord('a')] += 1
        h = ''
        for i in range(26):
            if t[i] > 0:
                h += chr(i + ord('a')) + str(t[i])
        res[h] = res.get(h, []) + [s]
    return res.values()


def group_anagrams_sort(strs):
    res = dict()
    for s in strs:
        k = tuple(sorted(s))
        res[k] = res.get(k, []) + [s]
    return res.values()
