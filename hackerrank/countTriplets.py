# Complete the countTriplets function below.


from collections import Counter


def countTriplets(arr, r):
    m = dict()
    m_pair = dict()
    count = 0
    for n in arr[::-1]:
        nxt1 = n * r
        nxt2 = n * r * r
        # (n, n*r, n*r*r)
        # if (nxt1, nxt2) in m_pair:
        #     count += m_pair[(nxt1, nxt2)]
        count += m_pair.get((nxt1, nxt2), 0)
        # (n/r, n, n*r)
        # if nxt1 in m:
        #     m_pair[(n, nxt1)] = m_pair.get((n, nxt1), 0) + m.get(nxt1)
        m_pair[(n, nxt1)] = m_pair.get((n, nxt1), 0) + m.get(nxt1, 0)
        # (n/r/r, n/r, n)
        m[n] = m.get(n, 0) + 1
    return count


def countTriplets(arr, r):
    n = len(arr)
    res = 0
    for i in range(n - 2):
        nxt1 = arr[i] * r
        nxt2 = arr[i] * r * r
        for j in range(i + 1, n - 1):
            if nxt1 == arr[j]:
                for k in range(j + 1, n):
                    if nxt2 == arr[k]:
                        res += 1
    return res


def countTriplets(arr, r):
    n = len(arr)
    d = dict()
    for i in range(n):
        if arr[i] not in d:
            d[arr[i]] = []
        d[arr[i]].append(i)

    res = 0
    for key in d:
        if d.get(key * r) and d.get(key * r * r):
            for i in d.get(key):
                for j in d.get(key * r):
                    if i < j:
                        for k in d.get(key * r * r):
                            if j < k:
                                res += 1
    return res
