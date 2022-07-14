# def findMedian(arr):
#     # Write your code here
#     arr.sort()
#     n = len(arr)
#     mid = n >> 1
#     return arr[mid]


def findMedian(arr):
    count = [0] * 20001
    for n in arr:
        count[n + 10000] += 1
    n = len(arr)
    mid = n >> 1

    cur = 0
    for i in range(20001):
        if cur >= mid:
            return i - 10000
        cur += count[i]


assert findMedian([1, 2, 3, 4, 5]) == 3
