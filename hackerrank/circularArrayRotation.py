def circularArrayRotation(a, k, queries):
    # Write your code here
    res = []
    for q in queries:
        res.append(a[(q - k) % len(a)])
    return res
