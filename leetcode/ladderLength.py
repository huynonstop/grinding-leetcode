from collections import deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str,
                     wordList: List[str]) -> int:
        return ladder_len(beginWord, endWord, wordList) + 1


def ladder_len(begin, end, words):
    n = len(end)
    valid = set()
    char = [set() for _ in range(n)]
    for w in words:
        valid.add(w)
        for i in range(n):
            char[i].add(w[i])
    # valid = set(words)
    # char = 'abcdefghijklmnopqrstuvwxyz'

    if end not in valid:
        return -1

    queue = deque([(begin, 0)])
    while queue:
        cur, step = queue.popleft()
        if cur == end:
            return step
        for i in range(n):
            for c in char[i]:
                transform = cur[:i] + c + cur[i+1:]
                if transform in valid:
                    valid.remove(transform)
                    queue.append((transform, step + 1))
    return -1
