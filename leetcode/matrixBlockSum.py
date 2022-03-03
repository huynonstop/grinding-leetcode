class Solution:
    def matrixBlockSum(self, mat: List[List[int]],
                       k: int) -> List[List[int]]:
        return matrix_block(mat, k)


def matrix_block(mat, k):
    r, c = len(mat), len(mat[0])
    range_sum = [[0] * (c+1) for _ in range(r + 1)]
    for i in range(r):
        for j in range(c):
            range_sum[i+1][j+1] = range_sum[i+1][j] + \
                range_sum[i][j+1] - range_sum[i+1][j+1] + mat[i][j]

    block_sum = [[0] * c for _ in range(r)]
    for i in range(r):
        for j in range(c):
            r1, c1 = max(0, i - k), max(0, j - k)
            r2, c2 = min(r, i + k + 1), min(c, j + k + 1)
            block_sum[i][j] = range_sum[r2][c2] - range_sum[r1][c2] - \
                range_sum[r2][c1] + range_sum[r1][c1]

    return block_sum
