from typing import List
from heapq import heappop, heappush, heapify
# https://leetcode.com/problems/k-closest-points-to-origin/discuss/220235/Java-Three-solutions-to-this-classical-K-th-problem.

# Min heap


class Solution:
    def kClosest(self, points: List[List[int]],
                 k: int) -> List[List[int]]:
        heap = []
        heapify(heap)
        for x, y in points:
            heappush(heap, ((x**2 + y**2), [x, y]))
        rs = []
        for i in range(k):
            v, p = heappop(heap)
            rs.append(p)
        return rs


Solution().kClosest([[1, 3], [-2, 2]], 1)

# max heap


class Solution:
    def kClosest(self, points: List[List[int]],
                 k: int) -> List[List[int]]:
        heap = []
        heapify(heap)
        for x, y in points:
            heappush(heap, (-(x**2 + y**2), [x, y]))
            if len(heap) > k:
                heappop(heap)
        rs = []
        for v, p in heap:
            rs.append(p)
        return rs

# sort


class Solution:
    def kClosest(self, points: List[List[int]],
                 k: int) -> List[List[int]]:
        points.sort(key=lambda x, y: x**2 + y**2)
        return points[slice(k)]

# quick select


class Solution:
    def kClosest(self, points: List[List[int]],
                 k: int) -> List[List[int]]:
        length = len(points)
        l = 0
        r = length - 1
        while l <= r:
            mid = self.partition(points, l, r)
            if mid == k:
                break
            if mid < k:
                l = mid + 1
            else:
                r = mid - 1
        return points[slice(k)]

    def partition(self, points: List[List[int]], l, r):
        pivot = points[l]
        while l < r:
            while l < r and Solution.compare(points[r], pivot) >= 0:
                r -= 1
            points[l] = points[r]
            while l < r and Solution.compare(points[l], pivot) <= 0:
                l += 1
            points[r] = points[l]
        points[l] = pivot
        return l

    def partition2(self, points: List[List[int]], l, r):
        pivot = points[r]
        i = l
        for j in range(l, r):
            if Solution.compare(points[j], pivot) < 0:
                if i != j:
                    points[i], points[j] = points[i], points[j]
                i += 1
        points[i], points[r] = points[r], points[i]
        return i

    @staticmethod
    def compare(p1, p2):
        return p1[0]**2 + p1[1]**2 - p2[0]**2 - p2[1]**2


Solution().kClosest([[3, 3], [5, -1], [-2, 4]], 2)
