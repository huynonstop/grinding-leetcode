class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        return add_strings(num1, num2)


def add_strings(num1, num2):
    n1, n2 = len(num1), len(num2)
    m = max(n1, n2)
    d = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    i = 1
    pre = 0
    res = ''
    while i <= m:
        c1 = d[num1[-i]] if i <= n1 else 0
        c2 = d[num2[-i]] if i <= n2 else 0
        cur = (c1 + c2 + pre) % 10
        pre = (c1 + c2 + pre) // 10
        res = str(cur) + res
        i += 1
    if pre:
        res = str(pre) + res
    return res
