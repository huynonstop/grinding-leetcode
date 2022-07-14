import math
from cmath import sqrt
from math import ceil, floor


def squares(a, b):
    # Write your code here
    i = 0
    while i * i < a:
        i += 1

    res = 0
    while i * i <= b:
        res += 1
        i += 1
    return res


def squares(a, b):
    return math.floor(math.sqrt(b)) - math.ceil(math.sqrt(a)) + 1
