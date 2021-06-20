from typing import List
from heapq import heapify, heappop, heappush


class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        heap = []
        rs = 0
        for count, value in boxTypes:  # n
            for i in range(count):  # k
                heappush(heap, value)
                rs += value
                if len(heap) > truckSize:
                    rs -= heappop(heap)  # log(n)
        return rs


class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda x: -x[1])
        ans = 0
        for box, units in boxTypes:
            if truckSize > box:
                truckSize -= box
                ans += box * units
            else:
                ans += truckSize * units
                return ans
        return ans


class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        unitBucket = [0] * 1001
        for box, unit in boxTypes:
            unitBucket[unit] += box
        ans = 0
        for i in range(len(unitBucket) - 1, -1, -1):
            box = unitBucket[i]
            if box != 0:
                if truckSize > box:
                    truckSize -= box
                    ans += box * i
                else:
                    ans += truckSize * i
                    return ans
        return ans

Solution().maximumUnits([[1, 3], [2, 2], [3, 1]], 4)
