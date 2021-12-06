class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        return check_inclusion(s1, s2)


def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False

    count = [0] * 26
    for c in s1:
        count[get_ch_idx(c)] += 1

    for i in range(len(s2)):
        count[get_ch_idx(s2[i])] -= 1
        if i >= len(s1):
            count[get_ch_idx(s2[i-len(s1)])] += 1
        if all_zero(count):
            return True

    return False


def get_ch_idx(c):
    return ord(c) - ord('a')


def all_zero(f1):
    for i in range(26):
        if f1[i] != 0:
            return False
    return True


check_inclusion('ab', 'eidbaooo')
