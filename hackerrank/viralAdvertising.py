def viralAdvertising(n):
    # Write your code here
    cur = 5
    like = 0
    res = 0
    for i in range(1, n+1):
        like = cur >> 1
        res += like
        cur = 3 * like
    return res
