def countingSort(arr):
    # Write your code here
    bucket = [0] * 100
    for n in arr:
        bucket[n] += 1
    return bucket
