from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        return merge(intervals)


def merge(intervals):
    n = len(intervals)
    intervals.sort(key=lambda x: x[0])
    res = []
    cur_min, cur_max = intervals[0]

    for i in range(1, n):
        t_min, t_max = intervals[i]
        if t_min > cur_max:
            res.append([cur_min, cur_max])
            cur_min, cur_max = t_min, t_max
        else:
            cur_min = min(cur_min, t_min)
            cur_max = max(cur_max, t_max)
    res.append([cur_min, cur_max])
    return res


def merge(intervals):
    res = []
    for start, end in sorted(intervals, key=lambda i: i.start):
        if res and start <= res[-1].end:
            res[-1].end = max(end, res[-1].end)
        else:
            res.append([start, end])
    return res


merge([[1, 4], [0, 0]])
