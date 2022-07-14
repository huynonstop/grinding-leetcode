def largestRectangle(h):
    h += [0]
    s = []
    ma = 0
    for i in range(0, len(h)):
        j = i
        while len(s) > 0 and s[-1][0] >= h[i]:
            val, j = s.pop()
            ma = max(ma, (i - j) * val)
        s.append([h[i], j])
    return ma


largestRectangle([1, 3, 6, 8, 7, 2, 4, 1])
