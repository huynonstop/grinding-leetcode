def cutTheSticks(arr):
    # Write your code here
    bucket = [0] * 1001
    for i in arr:
        bucket[i] += 1

    res = []
    cur = len(arr)
    for i in range(1001):
        if bucket[i] != 0:
            res.append(cur)
            cur -= bucket[i]

    return res
