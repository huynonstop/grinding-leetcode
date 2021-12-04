class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        return backtrack(board)


def is_valid(board, r, c, ch):
    for i in range(9):
        if board[r][i] == ch:
            return False
        if board[i][c] == ch:
            return False

        bgr = r // 3
        bgc = c // 3
        igr = i // 3
        igc = i % 3

        if board[3 * bgr + igr][3 * bgc + igc] == ch:
            return False
    return True


def backtrack(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == '.':
                for ch in "123456789":
                    if (is_valid(board, i, j, ch)):
                        board[i][j] = ch
                        if backtrack(board):
                            return True
                        board[i][j] = '.'
                return False
    return True


Solution().solveSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."],
     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
     [".", "9", "8", ".", ".", ".", ".", "6", "."],
     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
     [".", "6", ".", ".", ".", ".", "2", "8", "."],
     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
     [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
