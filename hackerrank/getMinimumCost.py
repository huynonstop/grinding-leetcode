# Complete the getMinimumCost function below.
def getMinimumCost(k, c):
    n = len(c)
    c.sort()
    s = 0
    for i in range(n):
        s += (i//k + 1) * c[-1-i]
    return s


assert getMinimumCost(3, [1, 3, 5, 7, 9]) == 29
