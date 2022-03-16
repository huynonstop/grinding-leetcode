from collections import Counter


def pairs(k, arr):
    # Write your code here
    count = Counter(arr)
    res = 0
    for n in arr:
        res += count.get(n-k, 0) + count.get(n+k, 0)
    return res >> 1


def pairs(k, arr):
    arr.sort()
    l = 0
    r = 1
    res = 0
    while r < len(arr):
        diff = arr[r] - arr[l]
        if k == diff:
            res += 1
            r += 1
        elif k < diff:
            l += 1
        else:
            r += 1
    return res
