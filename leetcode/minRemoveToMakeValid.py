class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        return min_remove(s)


def min_remove(s):
    l = list(s)
    stack = []

    for i, char in enumerate(s):
        if char == "(":
            stack.append(i)
        elif char == ")":
            if stack:
                stack.pop()
            else:
                l[i] = ''
    while stack:
        s[stack.pop()] = ''
    return ''.join(l)
