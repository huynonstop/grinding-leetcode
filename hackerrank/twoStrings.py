def twoStrings(s1, s2):
    # Write your code here
    s = set(s1)

    for c in s2:
        if c in s:
            return 'YES'

    return 'NO'
