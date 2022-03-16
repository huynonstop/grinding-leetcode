# from fractions import Fraction
# from math import ceil


# def minTime(machines, goal):
#     t = Fraction(0, 1)

#     for m in machines:
#         t += Fraction(1, m)
#     return ceil(goal / t)


# print(minTime([63, 2, 26, 59, 16, 55, 99, 21, 98, 65], 56))

import math


def minTime(machines, goal):
    machines = sorted(machines)
    num_machines = len(machines)
    # This is the earliest day we can reach our goal if all machines = 1
    earliest_day = math.ceil(goal/num_machines)
    low = earliest_day * machines[0]
    high = earliest_day * machines[-1]
    while low < high:
        mid = (low + high) // 2
        cur = sum(mid // m for m in machines)
        if cur >= goal:
            high = mid
        else:
            low = mid + 1
    return low


minTime([2, 3], 5)
