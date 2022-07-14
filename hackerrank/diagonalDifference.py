def diagonalDifference(arr):
    # Write your code here
    n = len(arr)
    res = 0
    for i in range(n):
        res += arr[i][i] - arr[i][-1 - i]
    return abs(res)
