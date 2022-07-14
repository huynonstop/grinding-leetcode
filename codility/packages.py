def solution(A, P, B, E):
    if B > E:
        B, E = E, B

    dicts = {}
    for a, p in zip(A, P):
        dicts[p] = a
    range = {p: a for p, a in sorted(
        dicts.items(), key=lambda kv: kv[0])}

    for p, a in range.items():
        start = p-a
        end = p+a
        # if package is in crane reach => crane can pick it up
        if start <= B and end >= B:
            if E <= end:
                # if reach end
                return True
            else:
                # continue next crane
                B = end
    return False


solution([2, 1], [5, 1], 3, 6)
