from collections import Counter


def pickingNumbers(a):
    # Write your code here
    counter = Counter(a)
    res = 0
    for num in a:
        res = max(
            res, counter[num] +
            max(counter[num - 1],
                counter[num + 1]))
    return res
