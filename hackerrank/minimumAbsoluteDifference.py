def minimumAbsoluteDifference(arr):
    # Write your code here
    arr.sort()
    res = arr[-1] - arr[0]
    for i in range(1, len(arr)):
        if arr[i-1] == arr[i]:
            return 0
        res = min(res, arr[i] - arr[i-1])
    return res


def minimumAbsoluteDifference(arr):
    # Write your code here
    res = float('inf')
    for i in range(len(arr) - 1):
        for j in range(i+1, len(arr)):
            if arr[i] == arr[j]:
                return 0
            res = min(res, abs(arr[i] - arr[j]))
    return res
