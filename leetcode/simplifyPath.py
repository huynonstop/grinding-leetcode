class Solution:
    def simplifyPath(self, path: str) -> str:
        return simplify(path)


class Solution:
    def simplifyPath(self, path: str) -> str:
        return simplify_2(path)


def simplify_2(path):
    stack = []
    i = 0
    n = len(path)
    while i < n:
        if path[i] != '/':
            t = ''
            while i < n and path[i] != '/':
                t += path[i]
                i += 1
            if t == '.':
                i += 1
                continue
            elif t == '..':
                if stack:
                    stack.pop()
            else:
                stack.append(t)
        i += 1
    if not stack:
        return '/'
    res = ''
    while stack:
        res = '/' + stack.pop() + res
    return res


def simplify_3(path):
    dir = path.split('/')
    stack = []
    for i in dir:
        if stack and i == "..":
            stack.pop()
        elif i != '..' and i != '' and i != '.':
            stack.append(i)
    if not stack:
        return '/'
    res = ''
    while stack:
        res = '/' + stack.pop() + res
    return res


def simplify(path):
    dir = path.split('/')
    res = []
    res.append(dir[0])
    for i in dir[1:]:
        if i == '' or i == '.':
            continue
        if i == '..':
            if res[-1] != '':
                res.pop()
            continue
        res.append(i)
    if len(res) == 1:
        return '/'
    return '/'.join(res)


simplify_3(
    "/../")
