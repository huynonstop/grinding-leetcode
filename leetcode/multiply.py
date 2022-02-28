class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        return mul_str(num1, num2)

#       1 2 3
#       4 5 6
#       7 3 8
#     6 1 5 0
#   4 9 2 0 0
#   5 6 0 8 8


def sum_array(a1, a2):
    n1, n2 = len(a1), len(a2)
    m = max(n1, n2)
    res = []
    i = 0
    pre = 0
    not_zero = False
    while i < m:
        c1 = a1[i] if i < n1 else 0
        c2 = a2[i] if i < n2 else 0
        cur = (c1 + c2 + pre) % 10
        pre = (c1 + c2 + pre) // 10
        if c1 + c2 + pre != 0:
            not_zero = True
        res.append(cur)
        i += 1
    if pre:
        res.append(pre)
    return res if not_zero else [0]


def mul_str(num1, num2):
    n1, n2 = len(num1), len(num2)
    res = []
    i1 = 1
    while i1 <= n1:
        c1 = ord(num1[-i1]) - ord('0')
        t = [0] * (i1-1)
        pre = 0
        i2 = 1

        while i2 <= n2:
            c2 = ord(num2[-i2]) - ord('0')
            cur = (c1 * c2 + pre) % 10
            pre = (c1 * c2 + pre) // 10
            t.append(cur)
            i2 += 1

        if pre:
            t.append(pre)

        res = sum_array(res, t)
        i1 += 1

    mul = ''
    for n in res[::-1]:
        mul += str(n)
    return mul


def mul_add_pair(num1, num2):
    n1, n2 = len(num1), len(num2)
    t = [0] * (n1 + n2)

    for i in range(n1):
        for j in range(n2):
            mul = (ord(num1[-1-i]) - ord('0')
                   ) * (ord(num2[-1-j]) - ord('0'))
            p1 = i + j
            p2 = i + j + 1
            sum = mul + t[p1]
            t[p1] = sum % 10
            t[p2] += sum // 10

    res = ''
    for n in t[::-1]:
        if not (n == 0 and len(res) == 0):
            res += str(n)
    return res or '0'


assert mul_add_pair('123', '456') == '56088'
assert mul_add_pair('9133', '0') == '0'
