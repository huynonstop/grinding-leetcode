from typing import List


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        return repeat_dna(s)


def repeat_dna(str):
    s1 = set()
    s2 = set()
    n = len(str)
    for i in range(n-9):
        sub = str[i:i+10]
        if sub in s1:
            s2.add(sub)
        else:
            s1.add(sub)
    return list(s2)


print(repeat_dna('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
