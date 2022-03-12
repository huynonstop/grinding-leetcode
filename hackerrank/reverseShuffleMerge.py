from collections import Counter


def reverseShuffleMerge(s):
    # Write your code here
    char_freq = Counter(s)
    remain_char = Counter(s)
    used_char = Counter()

    res = []

    def can_use(c):
        return char_freq[c] // 2 > used_char[c]

    def can_pop(c):
        return used_char[c] + remain_char[c] - 1 >= char_freq[c] // 2

    for c in reversed(s):
        if can_use(c):
            while res and res[-1] > c and can_pop(res[-1]):
                removed_char = res.pop()
                used_char[removed_char] -= 1
            used_char[c] += 1
            res.append(c)
        remain_char[c] -= 1

    return ''.join(res)


reverseShuffleMerge('eggegg')
