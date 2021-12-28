class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        return backspace_compare(s, t)


def backspace_compare(s, t):
    ns = len(s)
    cur_s = ns - 1
    count_s = 0
    nt = len(t)
    cur_t = nt - 1
    count_t = 0
    while True:
        while cur_s >= 0 and (count_s or s[cur_s] == '#'):
            count_s += 1 if s[cur_s] == '#' else -1
            cur_s -= 1
        while cur_t >= 0 and (count_t or t[cur_t] == '#'):
            count_t += 1 if t[cur_t] == '#' else -1
            cur_t -= 1
        if not (cur_s >= 0 and cur_t >= 0 and s[cur_s] == t[cur_t]):
            return cur_s == cur_t == -1
        cur_s, cur_t = cur_s - 1, cur_t - 1


backspace_compare(
    "bxj##tw",
    "bxo#j##tw")
