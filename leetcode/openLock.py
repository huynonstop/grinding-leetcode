from collections import deque
from typing import List


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        ends = set(deadends)
        start = '0000'
        if start in ends:
            return -1
        queue = deque([(start, 0)])
        seen = set([start])

        while queue:
            cur, step = queue.popleft()
            if cur == target:
                return step
            for i in range(4):
                for j in [-1, 1]:
                    nxt = cur[:i] + str((int(cur[i]) + j) %
                                        10) + cur[i+1:]
                    if nxt not in seen and nxt not in ends:
                        seen.add(nxt)
                        queue.append((nxt, step + 1))
        return -1


Solution().openLock(["0201", "0101", "0102", "1212", "2002"],
                    "0202")
