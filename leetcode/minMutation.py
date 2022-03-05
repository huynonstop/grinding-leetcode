from collections import deque


# class Solution:
#     def minMutation(
#             self, start: str, end: str, bank: List[str]) -> int:
#         return min_mutation(start, end, bank)


def min_mutation(start, end, bank):
    n = len(end)
    valid = set(bank)
    queue = deque([(start, 0)])
    while queue:
        cur, step = queue.popleft()
        if cur == end:
            return step
        for i in range(n):
            for c in "AGCT":
                mutation = cur[:i] + c + cur[i+1:]
                if mutation in valid:
                    valid.remove(mutation)
                    queue.append((mutation, step + 1))
    return -1


min_mutation("AACCGGTT",
             "AAACGGTA",
             ["AACCGATT", "AACCGATA", "AAACGATA", "AAACGGTA"])
