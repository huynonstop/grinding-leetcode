def libraryFine(d1, m1, y1, d2, m2, y2):
    # Write your code here
    if y1 < y2 or (
            y1 == y2 and m1 < m2) or (
            y1 == y2 and m1 == m2 and d1 < d2):
        return 0

    if d1 > d2 and m1 == m2 and y1 == y2:
        return (d1 - d2) * 15

    if m1 > m2 and y1 == y2:
        return (m1 - m2) * 500

    return 10000
