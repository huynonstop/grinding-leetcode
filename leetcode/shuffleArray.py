from random import randint
from typing import List


class Solution:

    def __init__(self, nums: List[int]):
        self.cur = nums
        self.org = nums[:]

    def reset(self) -> List[int]:
        self.cur = self.org[:]
        return self.cur

    def shuffle(self) -> List[int]:
        n = len(self.cur)
        for i in range(n):
            j = randint(i, n - 1)
            self.cur[i], self.cur[j] = self.cur[j], self.cur[i]
        return self.cur
