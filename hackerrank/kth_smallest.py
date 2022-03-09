

def k_smallest(prices, k):
    k_idx = k - 1
    l, r = 0, len(prices) - 1
    while l < r:
        p = partition(prices, l, r)
        if p == k_idx:
            return prices[k_idx]
        if p < k_idx:
            l = p + 1
        else:
            r = p - 1
    return prices[l]


def partition(prices, l, r):
    pivot = prices[r]
    i = l
    for j in range(l, r):
        if prices[j] < pivot:
            if i != j:
                prices[i], prices[j] = prices[j], prices[i]
            i += 1
    prices[i], prices[r] = prices[r], prices[i]
    return i


k_smallest([17,
            6,
            15,
            14,
            8,
            10,
            3,
            9,
            12,
            16
            ], 3)
