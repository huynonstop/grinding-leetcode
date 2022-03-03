from typing import List


class Solution:
    def nearestValidPoint(
            self, x: int, y: int, points: List[List[int]]) -> int:
        res = -1
        m_manhattan = float('inf')
        for i, (px, py) in enumerate(points):
            m_x = abs(px - x)
            m_y = abs(py - y)
            if (m_x == 0 or m_y == 0) and m_x + m_y < m_manhattan:
                res = i
                m_manhattan = m_x + m_y
        return res


Solution().nearestValidPoint(3,
                             4,
                             [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])
