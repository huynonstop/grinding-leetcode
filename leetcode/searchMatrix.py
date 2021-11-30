from typing import List


class Solution:
    def searchMatrix(
            self, matrix: List[List[int]],
            target: int) -> bool:
        return search_matrix(matrix, target)

#           desc<-
# [1  4  7  11  15] |
# [2  5  8  12  19] v
# [3  6  9  16  22] asc
# [10 13 14 17  24]
# [18 21 23 26  30]


def search_matrix(matrix, target):
    n = len(matrix)
    m = len(matrix[0])

    r = 0
    c = m - 1

    while c >= 0 and r <= n - 1:
        if matrix[r][c] == target:
            return True
        if matrix[r][c] < target:
            r += 1
        if matrix[r][c] > target:
            c -= 1

    return False


#   zone 1      zone 2
# S  *  *  * | *  *  *  *
# *  *  *  * | *  *  *  *
# *  *  *  * | *  *  *  *
# *  *  *  M | *  *  *  *
# -----------------------
# *  *  *  * | *  *  *  *
# *  *  *  * | *  *  *  *
# *  *  *  * | *  *  *  *
# *  *  *  * | *  *  *  E
#   zone 3      zone 4

def search_matrix_DAC(matrix, target, s, e):
    ur, uc = s
    lr, lc = e

    if (ur > lr or uc > lc or lr >= len(matrix) or lc >= len(matrix[0])):
        return False

    if ur == lr and uc == lc:
        return matrix[ur][uc] == target

    mr, mc = (ur + lr) >> 1, (uc + lc) >> 1
    mid = matrix[mr][mc]

    if mid > target:
        return search_matrix_DAC(
            matrix, target, s, (mr, mc)) or search_matrix_DAC(
            matrix, target, (ur, mc + 1),
            (mr, lc)) or search_matrix_DAC(
            matrix, target, (mr + 1, uc), (lr, mc))
    elif mid < target:
        return search_matrix_DAC(
            matrix, target, (ur, mc + 1),
            (mr, lc)) or search_matrix_DAC(
            matrix, target, (mr + 1, uc),
            (lr, mc)) or search_matrix_DAC(
            matrix, target, (mr + 1, mc + 1),
            e)

    return True


print(
    search_matrix_DAC(
        [[1, 4, 7, 11, 15],
         [2, 5, 8, 12, 19],
         [3, 6, 9, 16, 22],
         [10, 13, 14, 17, 24],
         [18, 21, 23, 26, 30]],
        20, (0, 0), (4, 4)))
