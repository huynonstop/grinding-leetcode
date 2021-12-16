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


# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.
# [[1, 3, 5, 7],
#  [10, 11, 16, 20],
#  [23, 30, 34, 60]]

class Solution:
    def searchMatrix(
            self, matrix: List[List[int]],
            target: int) -> bool:
        return search_matrix(matrix, target)


def search_matrix(matrix, target):
    R = len(matrix)
    C = len(matrix[0])

    t = 0
    d = R - 1

    while t < d:
        m = (t + d + 1) >> 1
        if target < matrix[m][0]:
            d = m - 1
        else:
            t = m

    r = t
    s = 0
    e = C - 1
    while s <= e:
        m = (s + e) >> 1
        if target == matrix[r][m]:
            return True
        elif target < matrix[r][m]:
            e = m - 1
        else:
            s = m + 1
    return False


def search_matrix_2(matrix, target):
    R = len(matrix)
    C = len(matrix[0])

    l = 0
    r = R * C - 1

    while l <= r:
        m = (l + r) >> 1
        num_mid = matrix[m // C][m % C]
        if num_mid == target:
            return True
        elif num_mid > target:
            r = m - 1
        else:
            l = m + 1

    return False


search_matrix_2([[1, 3]], 3)
