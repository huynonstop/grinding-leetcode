def luckBalance(k, contests):
    # Write your code here
    bucket = [0] * (10 ** 4 + 1)
    sum = 0
    for l, t in contests:
        if t == 0:
            sum += l
        else:
            bucket[l] += 1
    for i in range((10 ** 4), 0, -1):
        if k and bucket[i]:
            m = min(k, bucket[i])
            sum += min(k, bucket[i]) * i
            k -= m
            bucket[i] -= m
        if k == 0 and bucket[i]:
            sum -= bucket[i] * i
    return sum


assert luckBalance(
    3, [[5, 1],
        [2, 1],
        [1, 1],
        [8, 1],
        [10, 0],
        [5, 0]]) == 29
