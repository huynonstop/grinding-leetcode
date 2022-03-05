from collections import deque


class Solution:
    def canMeasureWater(
            self, jug1Capacity: int, jug2Capacity: int,
            targetCapacity: int) -> bool:
        if targetCapacity > jug1Capacity + jug2Capacity:
            return False

        queue = deque([(0, 0)])
        seen = set([(0, 0)])

        while queue:
            jug1, jug2 = queue.popleft()
            if jug1 + jug2 == targetCapacity:
                return True

            states = set()
            states.add((jug1Capacity, jug2))  # fill jar 1
            states.add((jug1, jug2Capacity))  # fill jar 2
            states.add((0, jug2))  # empty jar 1
            states.add((jug1, 0))  # empty jar 2
            total = jug1 + jug2
            # pour jar 2 to 1
            states.add(
                (min(jug1Capacity, total),
                 total - min(jug1Capacity, total)))
            # pour jar 1 to 2
            states.add(
                (total - min(jug2Capacity, total),
                 min(jug2Capacity, total)))

            for s in states:
                if s not in seen:
                    seen.add(s)
                    queue.append(s)
        return False

    def canMeasureWaterGCD(self, c1, c2, target):
        def GCD(a, b):
            if b == 0:
                return a
            return GCD(b % a, a)

        if target > c1 + c2:
            return False
        if c1 == target or c2 == target or c1 + c2 == target:
            return True
        return target % GCD(c1, c2)


Solution().canMeasureWater(3, 5, 4)
