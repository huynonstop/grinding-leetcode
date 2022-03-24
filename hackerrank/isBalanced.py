
def isBalanced(s):
    # Write your code here
    stack = []
    open_map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    close_map = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for c in s:
        if c in open_map:
            stack.append(c)
        elif c in close_map:
            if stack and open_map[stack[-1]] == c:
                stack.pop()
            else:
                return 'NO'
    return 'NO' if stack else 'YES '
