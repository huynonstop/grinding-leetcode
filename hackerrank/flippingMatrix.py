def flippingMatrix(matrix):
    # Write your code here
    n = len(matrix)
    m = n // 2
    # Columns
    res = 0
    for i in range(n):
        for j in range(n):
            res += max(matrix[i][j],
                       matrix[i][-1 - j],
                       matrix[-1 - i][j],
                       matrix[-1 - i][-1 - j])
    return res


# flippingMatrix(
#     [[112, 42, 83, 119],
#      [56, 125, 56, 49],
#      [15, 78, 101, 43],
#      [62, 98, 114, 108]])
flippingMatrix(
    [[107, 54, 128, 15],
     [12, 75, 110, 138],
     [100, 96, 34, 85],
     [75, 15, 28, 112]])
