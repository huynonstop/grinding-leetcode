from typing import List


class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        return letter_case_permutation(s)


def letter_case_permutation(s: str):
    res = []
    cur = []
    l = len(s)

    def backtrack(i=0):
        if i == l:
            res.append(''.join(cur))
            return

        # if s[i].isdigit():
        #     cur.append(s[i])
        #     backtrack(i + 1)
        #     cur.pop()
        #     return

        # for c in [s[i].lower(), s[i].upper()]:
        #     cur.append(c)
        #     backtrack(i + 1)
        #     cur.pop()

        cur.append(s[i].lower())
        backtrack(i + 1)
        cur.pop()
        if s[i].isalpha():
            cur.append(s[i].upper())
            backtrack(i + 1)
            cur.pop()

    def backtrack_2(pre='', i=0):
        if i == l:
            res.append(pre)
            return
        backtrack_2(pre + s[i].lower(), i + 1)
        if s[i].isalpha():
            backtrack_2(pre + s[i].upper(), i + 1)

    backtrack_2()
    return res


letter_case_permutation('a1b2')
