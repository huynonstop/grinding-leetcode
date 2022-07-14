def minimumBribes(q):
    # Write your code here
    n = len(q)

    res = 0
    for i in range(n - 1):
        if q[i] - 1 - i > 2:
            return print("Too chaotic")
        j = i
        while j >= 0 and q[j+1] < q[j]:
            q[j+1], q[j] = q[j], q[j+1]
            res += 1
            j -= 1
    return print(res)


def minimumBribes(q):
    # Write your code here
    n = len(q)
    last = q[-1]
    res = 0
    for i in range(n - 2, -1, -1):
        if q[i] - i - 1 > 2:
            return print("Too chaotic")
        elif q[i] - i - 1 == 2:
            res += 2
        elif q[i] > last:
            res += 1
        else:
            last = q[i]
    return print(res)


minimumBribes([2, 1, 5, 3, 4])
