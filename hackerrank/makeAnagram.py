from operator import le
from typing import Counter


def makeAnagram(a, b):
    # Write your code here
    c1 = Counter(a)
    same = 0
    for c in b:
        if c in c1 and c1[c] >= 1:
            same += 2
            c1[c] -= 1
    return len(a) + len(b) - same
