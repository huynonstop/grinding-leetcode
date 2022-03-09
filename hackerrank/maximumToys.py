def maximumToys(prices, k):
    # Write your code here
    l = 0
    r = len(prices) - 1
    quick_sort(prices, l, r)
    res = 0
    cur = k
    for p in prices:
        if cur >= p:
            res += 1
            cur -= p
    return res


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


def quick_sort(prices, l, r):
    if l < r:
        p = partition(prices, l, r)
        quick_sort(prices, l, p - 1)
        quick_sort(prices, p + 1, r)


quick_sort([1, 12, 5, 111, 200, 1000, 10], 0, 6)
