import bisect


def maximumSum(a, m):
    # Write your code here
    prefix_mod = []
    prefix = 0
    res = 0
    for val in a:
        prefix = (prefix + val % m) % m
        res = max(res, prefix)
        # maximize a modulo by subtracting it with the closest higher modulo than it
        i = bisect.bisect_left(prefix_mod, prefix+1)
        if i < len(prefix_mod):
            res = max(res, prefix - prefix_mod[i] + m)
        bisect.insort(prefix_mod, prefix)
    return res


def maximumSum(a, m):
    n = len(a)
    prefix_sum = [0] * (n)
    s = 0
    for i in range(n):
        s = prefix_sum[i] = s + a[i]
    res = 0
    for i in range(n):
        for j in range(i, n):
            cur = prefix_sum[j] if i == 0 else prefix_sum[j] - prefix_sum[i - 1]
            res = max(res, cur % m)
    return res
