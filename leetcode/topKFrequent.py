from collections import Counter
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        counter = Counter(nums)
        bucket = [None] * (n+1)
        for key in counter:
            f = counter[key]
            if not bucket[f]:
                bucket[f] = []
            bucket[f].append(key)
        i = n
        res = []
        while i >= 0 and len(res) < k:
            if bucket[i]:
                res.extend(bucket[i])
            i -= 1
        return res


Solution().topKFrequent([1], 1)
