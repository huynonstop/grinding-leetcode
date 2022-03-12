def alternatingCharacters(s):
    # Write your code here
    pre = ''
    res = 0
    for c in s:
        if c == pre:
            res += 1
        pre = c
    return res
