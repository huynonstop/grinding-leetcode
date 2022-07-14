def lonelyinteger(a):
    # Write your code here
    res = a[0]
    for num in a[1:]:
        res ^= num

    return res
