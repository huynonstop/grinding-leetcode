def sherlockAndAnagrams(s):
    # Write your code here
    n = len(s)
    res = 0
    m = dict()
    for i in range(n):
        for j in range(n):
            ss = ''.join(sorted(s[i:-j]))
            m[ss] = m.get(ss, 0) + 1
    for ss in m:
        res += (m[ss] - 1) * m[ss] // 2
    return res
