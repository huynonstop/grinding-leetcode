from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        return can_construct(ransomNote, magazine)


def can_construct(ransomNote, magazine):
    c_m = Counter(magazine)
    for c in ransomNote:
        if c not in c_m or c_m[c] == 0:
            return False
        c_m[c] -= 1
    return True
