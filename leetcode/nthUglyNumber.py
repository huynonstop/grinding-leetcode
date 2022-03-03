class Solution:
    def nthUglyNumber(self, n: int) -> int:
        return ugly_number(n)


def ugly_number(n):
    res = [1] * n
    t2 = t3 = t5 = 0
    for i in range(1, n):
        res[i] = min(res[t2]*2, res[t3]*3, res[t5]*5)
        if res[i] == res[t2]*2:
            t2 += 1
        if res[i] == res[t3]*3:
            t3 += 1
        if res[i] == res[t5]*5:
            t5 += 1
    return res[-1]


ugly_number(12)
