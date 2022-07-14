# from itertools import accumulate
from math import inf
# https://stackoverflow.com/questions/69236733/remove-n-consecutive-elements-from-array-so-that-amplitude-of-remaining-element
# https://leetcode.com/discuss/interview-question/1523646/google-find-the-min-amplitude-after-removing-k-consecutive-elements-in-an-array


def acc(arr, operation, initial):
    rs = []
    if initial:
        rs.append(initial)
    for v in arr:
        rs.append(operation(rs[-1], v))
    return rs


def solution(A, K):
    # Get prefix max and min of all elements
    pre = zip(acc(A, min, initial=inf),
              acc(A, max, initial=-inf))
    # Get suffix max and min of all elements
    suf = list(zip(list(acc(A[::-1], min, initial=inf))[::-1],
                   list(acc(A[::-1], max, initial=-inf))[::-1]))

    return min(max(left[1], right[1]) - min(left[0], right[0])
               for left, right in zip(pre, suf[K:]))


print(solution([5, 3, 6, 1, 3], 2))


def naive(A, K):
    result = inf
    for i in range(len(A) + 1 - K):
        copy = A.copy()
        del copy[i: i+K]
        result = min(result, max(copy) - min(copy))
    return result
