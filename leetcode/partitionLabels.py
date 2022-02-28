class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        return partition_labels(s)


def partition_labels(S):

    rightmost = {c: i for i, c in enumerate(S)}
    left, right = 0, 0

    result = []
    for i, letter in enumerate(S):

        right = max(right, rightmost[letter])

        if i == right:
            result += [right-left + 1]
            left = i+1

    return result
