def getMoneySpent(keyboards, drives, b):
    #
    # Write your code here.
    #
    res = -1
    for k in keyboards:
        for d in drives:
            if k + d <= b:
                res = max(res, k+d)
    return res


def getMoneySpentSort(keyboards, drives, b):
    keyboards.sort(reversed=True)
    drives.sort()
    i = 0
    j = 0
    res = -1
    while i < len(keyboards):
        while j < len(drives):
            if keyboards[i] + drives[j] > b:
                break
            if res < keyboards[i] + drives[j] <= b:
                res = keyboards[i] + drives[j]
            j += 1
        i += 1
    return res
