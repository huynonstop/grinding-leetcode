def maxMin(k, arr):
    # Write your code here
    n = len(arr)
    arr.sort()
    rs = float('inf')
    for i in range(n-(k-1)):
        if arr[i] == arr[i+k-1]:
            return 0
        rs = min(rs, arr[i+k-1] - arr[i])
    return rs
