from typing import List


class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        return num_pairs(time)


def num_pairs(time):
    d = dict()
    res = 0
    for t in time:
        m = t % 60
        n = (60 - m) % 60
        if n in d:
            res += d.get(n)
        d[m] = d.setdefault(m, 0) + 1

    return res


def num_pairs_array(time):
    c_map = [0] * 60
    res = 0
    for t in time:
        res += c_map[-t % 60]
        c_map[t % 60] += 1
    return res


assert num_pairs([30, 20, 150, 100, 40]) == 3
assert num_pairs([60, 60, 60]) == 3

# num_pairs([15, 63, 451, 213, 37, 209, 343, 319])
