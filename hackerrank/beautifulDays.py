def is_beautiful(a, k):
    t = a
    r = 0
    while a:
        r = r * 10 + a % 10
        a = a // 10

    return abs(t - r) % k == 0


def beautifulDays(i, j, k):
    # Write your code here
    c = 0
    for a in range(i, j + 1):
        if is_beautiful(a, k):
            c += 1
    return c


beautifulDays(20, 23, 6)
