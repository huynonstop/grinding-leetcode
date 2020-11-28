from typing import List
from collections import Counter, defaultdict


class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        counts = dict()
        rs = 0
        for num1, num2 in dominoes:
            if num1 > num2:
                num1, num2 = num2, num1
            # if (num1,num2) in counts:
            #   rs += counts[(num1,num2)]
            #   counts[(num1,num2)] += 1
            # else:
            #   counts[(num1,num2)] = 1
            c = counts.get((num1, num2), 0)
            rs += c
            counts[(num1, num2)] = c + 1
        return rs


class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        counts = defaultdict(lambda: 0)
        for num1, num2 in dominoes:
            if num1 > num2:
                num1, num2 = num2, num1
            counts[(num1, num2)] += 1
        return sum((count * (count - 1) // 2 for count in counts.values()))


class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        return sum((count * (count - 1) // 2 for count in Counter(
            tuple(sorted(x)) for x in dominoes).values()))


rs = Solution().numEquivDominoPairs([[1, 1], [2, 2], [1, 1], [1, 2], [1, 2],
                                     [1, 1]])
print(rs)