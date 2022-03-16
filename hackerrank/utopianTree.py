def utopianTree(n):
    # Write your code here
    res = 1
    i = 0
    while i < n:
        if i % 2 == 1:
            res += 1
        else:
            res *= 2
        i += 1
    return res
