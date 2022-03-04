from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        n = len(s)
        counter = Counter(s)
        bucket = [None] * (n+1)
        for char in counter:
            f = counter[char]
            if not bucket[f]:
                bucket[f] = []
            bucket[f].append(char)
        i = n
        res = ''
        while i >= 0:
            if bucket[i]:
                for char in bucket[i]:
                    res += char * i
            i -= 1
        return res
