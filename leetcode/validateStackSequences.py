from typing import List


class Solution:
    def validateStackSequences(
            self, pushed: List[int],
            popped: List[int]) -> bool:
        return validate(pushed, popped)


def validate_greedy(pushed: List[int],
                    popped: List[int]) -> bool:
    n = len(pushed)
    stack = []

    j = 0
    for i in range(n):
        stack.append(pushed[i])
        while j < n and stack and stack[-1] == popped[j]:
            stack.pop()
            j += 1
    return j == n


def validate(pushed: List[int],
             popped: List[int]) -> bool:
    i = 0
    j = 0
    n = len(pushed)
    stack = []
    while i < n:
        if pushed[i] == popped[j]:
            i += 1
            j += 1
        elif stack and stack[-1] == popped[j]:
            stack.pop()
            j += 1
        else:
            stack.append(pushed[i])
            i += 1

    while j < n:
        if stack and stack[-1] == popped[j]:
            stack.pop()
            j += 1
        elif stack:
            return False
    return True


validate([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])
