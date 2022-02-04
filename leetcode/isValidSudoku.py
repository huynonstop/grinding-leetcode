from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        return is_valid_sudoku(board)


def is_valid(board):
    for i in range(9):
        rows = set()
        cols = set()
        boxes = set()

        ir = i // 3
        ic = i % 3

        for j in range(9):
            jr = j // 3
            jc = j % 3
            r = 3 * ir + jr
            c = 3 * ic + jc

            if board[i][j] != '.':
                if board[i][j] in rows:
                    return False
                rows.add(board[i][j])

            if board[j][i] != '.':
                if board[j][i] in cols:
                    return False
                cols.add(board[j][i])

            if board[r][c] != '.':
                if board[r][c] in boxes:
                    return False
                boxes.add(board[r][c])

    return True


def is_valid_sudoku(board):
    return is_valid_all_boxes(board) and is_valid_all_cols(board) and is_valid_all_rows(board)


def is_valid_all_rows(board):
    for i in range(9):
        s = set()
        for j in range(9):
            if board[i][j] != '.':
                if board[i][j] in s:
                    return False
                s.add(board[i][j])
    return True


def is_valid_all_cols(board):
    for i in range(9):
        s = set()
        for j in range(9):
            if board[j][i] != '.':
                if board[j][i] in s:
                    return False
                s.add(board[j][i])
    return True


def is_valid_all_boxes(board):
    for i in range(9):
        s = set()
        ir = i // 3
        ic = i % 3
        for j in range(9):
            jr = j // 3
            jc = j % 3
            r = 3 * ir + jr
            c = 3 * ic + jc
            if board[r][c] != '.':
                if board[r][c] in s:
                    return False
                s.add(board[r][c])
        print(s)
    return True


board = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
         ["6", ".", ".", "1", "9", "5", ".", ".", "."],
         [".", "9", "8", ".", ".", ".", ".", "6", "."],
         ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
         ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
         [".", "6", ".", ".", ".", ".", "2", "8", "."],
         [".", ".", ".", "4", "1", "9", ".", ".", "5"],
         [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
