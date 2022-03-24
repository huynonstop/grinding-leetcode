def permutationEquation(p):
    # Write your code here
    p_mp = dict()
    n = len(p)
    for i in range(n):
        p_mp[p[i]] = i + 1
    res = []
    for i in range(n):
        res.append(p_mp[p_mp[i + 1]])
    return res


permutationEquation([2, 3, 1])
