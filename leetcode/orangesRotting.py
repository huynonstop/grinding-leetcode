from typing import List
from collections import deque


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        R = len(grid)
        if R == 0:
            return -1
        C = len(grid[0])
        fresh_cnt = 0
        rotten = deque()

        for r in range(R):
            for c in range(C):
                if grid[r][c] == 2:
                    rotten.append((r, c))
                elif grid[r][c] == 1:
                    fresh_cnt += 1

        min_passed = 0
        while rotten and fresh_cnt > 0:
            min_passed += 1
            # process rotten oranges on the current level
            for _ in range(len(rotten)):
                x, y = rotten.popleft()
                for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                    new_x, new_y = x + dx, y + dy
                    if new_x < 0 or new_x == R or new_y < 0 or new_y == C:
                        continue
                    if grid[new_x][new_y] == 0 or grid[new_x][
                            new_y] == 2:
                        continue

                    fresh_cnt -= 1
                    grid[new_x][new_y] = 2
                    # add the next level rotten to the queue
                    rotten.append((new_x, new_y))
        return min_passed if fresh_cnt == 0 else -1
