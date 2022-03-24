from collections import Counter


def plusMinus(arr):
    # Write your code here
    n = len(arr)
    res = [0, 0, 0]
    for a in arr:
        if a > 0:
            res[0] += 1
        elif a < 0:
            res[1] += 1
        else:
            res[2] += 1

    for c in res:
        print(c/n)
