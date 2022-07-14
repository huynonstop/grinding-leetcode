def appendAndDelete(s, t, k):
    # Write your code here
    n = len(s)
    m = len(t)
    total = n + m
    if k >= total:
        return 'Yes'

    i = 0
    while i < n and i < m and s[i] == t[i]:
        i += 1
    diff = total - 2 * i
    if k >= diff and (k - diff) % 2 == 0:
        return 'Yes'
    else:
        return 'No'


def appendAndDelete(s, t, k):
    # Write your code here
    n = len(s)
    m = len(t)
    i = 0
    while i < n and i < m and s[i] == t[i]:
        i += 1
    diff = n - i + m - i
    if k == diff or k >= n + m:
        return 'Yes'
    elif k > diff and (k - diff) % 2 == 0:
        return 'Yes'
    else:
        return 'No'
