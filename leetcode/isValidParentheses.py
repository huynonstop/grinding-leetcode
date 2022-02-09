
class Solution:
    def isValid(self, s: str) -> bool:
        return is_valid(s)


def is_valid(s):
    stack = []
    open = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for c in s:
        if c in open:
            stack.append(c)
        elif not stack:
            return False
        else:
            pre = stack.pop()
            if c != open[pre]:
                return False
    return not stack


is_valid('()')
