import math


def activityNotifications(expenditure, d):
    # Write your code here
    n = len(expenditure)

    bucket = [0] * 201

    for i in range(d):
        bucket[expenditure[i]] += 1

    res = 0
    for i in range(d, n):
        count = 0
        low_median = None
        high_median = None

        for j in range(0, 201):
            count += bucket[j]
            if not low_median and count >= math.floor((d+1)/2):
                low_median = j
            if low_median and count >= math.ceil((d+1)/2):
                high_median = j
                break

        if expenditure[i] >= high_median + low_median:
            res += 1
        bucket[expenditure[i-d]] -= 1
        bucket[expenditure[i]] += 1
    return res


activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
