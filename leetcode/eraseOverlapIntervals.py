from typing import List


class Solution:
    def eraseOverlapIntervals(
            self, intervals: List[List[int]]) -> int:
        return erase(intervals)


def get_max_intervals_non_overlaping(intervals):
    res = 1
    intervals.sort(key=lambda x: x[0])
    cur_end = intervals[0][1]

    for start, end in intervals:
        if start >= cur_end:
            res += 1
            cur_end = end

    return res


def erase(intervals):
    n = len(intervals)
    return n - get_max_intervals_non_overlaping(intervals)
