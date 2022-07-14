def findDigits(n):
    # Write your code here
    t = n
    res = 0
    while t:
        cur = t % 10
        if cur and n % cur == 0:
            res += 1
        t = t // 10
    return res
