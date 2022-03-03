class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        return find_recursive(n, k)


def find_recursive(n, k):

    def helper(n, k):
        if n == 0:
            return -1
        if n == 1:
            return 0
        return (helper(n-1, k) + k) % n

    return helper(n, k) + 1


def find(n, k):
    idx = 0
    for i in range(1, n + 1):
        idx = (idx + k) % i
    return idx + 1
