from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        return solve(board)


def solve(board):
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    R = len(board)
    C = len(board[0])

    def dfs(i, j):
        if i < 0 or i >= R or j < 0 or j >= C or board[i][j] != 'O':
            return
        board[i][j] = '#'
        for dx, dy in dirs:
            dfs(i + dx, j + dy)

    for i in range(R):
        if board[i][0] == 'O':
            dfs(i, 0)
        if board[i][C - 1] == 'O':
            dfs(i, C - 1)

    for j in range(C):
        if board[0][j] == 'O':
            dfs(0, j)
        if board[R-1][j] == 'O':
            dfs(R-1, j)

    for i in range(R):
        for j in range(C):
            if board[i][j] == 'O':
                board[i][j] = 'X'
            if board[i][j] == '#':
                board[i][j] = 'O'
