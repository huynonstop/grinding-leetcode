from typing import List
from collections import deque


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        return letter_combinations(digits)


def letter_combinations_bfs(digits):
    letter = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    rs = []
    if digits:
        rs.append("")
    for d in digits:
        temp = []
        for l in letter[d]:
            for c in rs:
                temp.append(c + l)
        rs = temp

    return rs


def letter_combinations(digits):
    letter = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    rs = []
    n = len(digits)

    def backtrack(index, path):
        if len(path) == n:
            rs.append(path)
            return
        for l in letter[digits[index]]:
            backtrack(index + 1, path + l)
    if digits:
        backtrack(0, '')
    return rs


letter_combinations('')
