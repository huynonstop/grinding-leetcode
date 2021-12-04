class Solution:
    def mySqrt(self, x: int) -> int:
        return bin_sqrt(x)

# Find largest x: x * x <= 8
# 0 1 2 3 4 5 6 7 8
# T T T T F F F F F

# Find largest x: x * x <= 4
# 0 1 2 3 4
# T T T F F

# Find largest x: x * x <= 3
# 0 1 2 3
# T T F F


def bin_sqrt(x):
    l = 0
    r = x

    while(l < r):
        m = (l + r + 1) >> 1
        if x < m * m:
            r = m - 1
        else:
            l = m

    return l


def bin_sqrt_2(x):
    l, r = 0, x
    while l < r:
        mid = (l+r) // 2
        if x < mid*mid:
            r = mid
        else:
            l = mid + 1
    return l-1 if l > 1 else l


bin_sqrt_2(3)
