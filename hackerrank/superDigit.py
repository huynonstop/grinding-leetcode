def superDigit(n, k):
    # Write your code here
    if len(n) == k == 1:
        return int(n)

    res = 0
    for num in n:
        res += int(num)

    return superDigit(str(res*k), 1)
