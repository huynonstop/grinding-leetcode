# Complete the triplets function below.
def counting_sort(arr):
    bucket = [0] * (100000001)
    for a in arr:
        bucket[a] += 1
    return bucket


def triplets_counting_sort(a, b, c):
    bucket_a = counting_sort(a)
    bucket_b = counting_sort(b)
    bucket_c = counting_sort(c)
    res = 0
    c_a = c_b = 0
    pre = 0
    for i in range(100000001):
        if bucket_b[i]:
            for j in range(pre + 1, i + 1):
                if bucket_a[j]:
                    c_a += 1
                if bucket_c[j]:
                    c_b += 1
            res += c_a * c_b
            pre = i
    return res


# assert triplets_counting_sort([1, 3, 5],
#                               [2, 3],
#                               [1, 2, 3]) == 8
# assert triplets_counting_sort([1, 4, 5],
#                               [2, 3, 3],
#                               [1, 2, 3]) == 5


def triplets(a, b, c):
    a = sorted(set(a))
    b = sorted(set(b))
    c = sorted(set(c))
    n_a, n_b, n_c = len(a), len(b), len(c)
    i_a = i_b = i_c = 0
    res = 0
    while i_b < n_b:
        while i_a < n_a and b[i_b] >= a[i_a]:
            i_a += 1
        while i_c < n_c and b[i_b] >= c[i_c]:
            i_c += 1
        i_b += 1
        res += i_a * i_c
    return res


assert triplets([1, 3, 5],
                [2, 3],
                [1, 2, 3]) == 8
assert triplets([1, 4, 5],
                [2, 3, 3],
                [1, 2, 3]) == 5
