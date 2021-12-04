class Solution:
    def totalNQueens(self, n: int) -> int:
        board = [[0 for c in range(n)] for r in range(n)]

        def is_attacked(r, c):
            for row in range(n):
                if r != row and board[row][c] == 1:
                    return True

            for col in range(n):
                if c != col and board[r][col] == 1:
                    return True

            left_diagonal_r = r - min(r, c)
            left_diagonal_c = c - min(r, c)

            while left_diagonal_r < n and left_diagonal_c < n:
                if (left_diagonal_r != r or left_diagonal_c != c) and \
                        board[left_diagonal_r][left_diagonal_c] == 1:
                    return True
                left_diagonal_r += 1
                left_diagonal_c += 1

            right_diagonal_r = r - min(r, n - c - 1)
            right_diagonal_c = c + min(r, n - c - 1)

            while right_diagonal_r < n and right_diagonal_c >= 0:
                if (right_diagonal_r != r or right_diagonal_c != c) and \
                        board[right_diagonal_r][right_diagonal_c] == 1:
                    return True
                right_diagonal_r += 1
                right_diagonal_c -= 1

            return False

        def backtrack(row=0, count=0):
            for col in range(n):
                if not is_attacked(row, col):
                    board[row][col] = 1
                    if (row == n - 1):
                        count += 1
                    else:
                        count = backtrack(row + 1, count)
                    board[row][col] = 0
            return count

        return backtrack()


class Solution:
    def totalNQueens(self, n: int) -> int:
        cols = set()
        left_diag = set()
        right_diag = set()

        def backtrack(row=0):
            if row == n:
                return 1
            count = 0
            for col in range(n):
                dl = row - col
                dr = row + col

                if dl in left_diag or dr in right_diag or col in cols:
                    continue

                cols.add(col)
                left_diag.add(dl)
                right_diag.add(dr)

                count += backtrack(row + 1)

                cols.remove(col)
                left_diag.remove(dl)
                right_diag.remove(dr)
            return count

        return backtrack()


print(Solution().totalNQueens(4))
