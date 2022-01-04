from typing import List


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        return exist(board, word)


def exist(board, word):
    R = len(board)
    C = len(board[0])
    n = len(word)
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    def backtrack(i, j, index):
        if index == n:
            return True
        if i < 0 or i >= R or j < 0 or j >= C or board[i][j] != word[index]:
            return False

        t = board[i][j]
        board[i][j] = '#'

        rs = False
        for dx, dy in dirs:
            rs = rs or backtrack(i + dx, j + dy, index + 1)

        board[i][j] = t
        return rs

    for i in range(R):
        for j in range(C):
            if backtrack(i, j, 0):
                return True
    return False


exist(
    [["A", "B", "C", "E"],
     ["S", "F", "C", "S"],
     ["A", "D", "E", "E"]],
    "ABCB")
