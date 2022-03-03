from typing import List


class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        r, c = len(matrix), len(matrix[0])
        range_sum = [[0] * (c+1) for _ in range(r + 1)]
        for i in range(1, r + 1):
            for j in range(1, c + 1):
                range_sum[i][j] = range_sum[i - 1][j] + range_sum[i][
                    j - 1] - range_sum[i - 1][j - 1] + matrix[i-1][j-1]
        self.range_sum = range_sum

    def sumRegion(
            self, r1: int, c1: int, r2: int, c2: int) -> int:
        return self.range_sum[r2 + 1][c2 + 1] - self.range_sum[r1][c2 +
                                                                   1] - self.range_sum[r2 + 1][c1] + self.range_sum[r1][c1]
        # Your NumMatrix object will be instantiated and called as such:
        # obj = NumMatrix(matrix)
        # param_1 = obj.sumRegion(row1,col1,row2,col2)


m = NumMatrix(
    [[3, 0, 1, 4, 2],
     [5, 6, 3, 2, 1],
     [1, 2, 0, 1, 5],
     [4, 1, 0, 1, 7],
     [1, 0, 3, 0, 5]])

m.sumRegion(2, 1, 4, 3)
