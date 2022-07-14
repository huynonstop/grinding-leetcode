# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c, k):
    n = len(c)
    res = 100
    end = False
    cur = 0
    while cur != 0 or not end:
        cur = (cur + k) % n
        if cur == 0:
            end = True
        res -= 1
        res -= 2 if c[cur] == 1 else 0
    return res


jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)
