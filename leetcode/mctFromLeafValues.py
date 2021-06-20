# https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/discuss/478708/RZ-Summary-of-all-the-solutions-I-have-learned-from-Discuss-in-Python#
# https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/discuss/339959/One-Pass-O(N)-Time-and-Space

# dp[i, j] = dp[i, k] + dp[k + 1, j] + max(A[i, k]) * max(A[k + 1, j])

from typing import List

class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        return self.helper(arr, 0, len(arr) - 1, {})
        
    def helper(self, arr, l, r, cache):
        if (l, r) in cache:
            return cache[(l, r)]
        if l >= r:
            return 0
        
        res = float('inf')
        for i in range(l, r):
            rootVal = max(arr[l:i+1]) * max(arr[i+1:r+1])
            res = min(res, rootVal + self.helper(arr, l, i, cache) + self.helper(arr, i + 1, r, cache))
        
        cache[(l, r)] = res
        return res
    
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        n = len(arr)
        dp = [[float('inf') for _ in range(n)] for _ in range(n)]
        for i in range(n):
            dp[i][i] = 0
        
        for l in range(2, n + 1):
            for i in range(n - l + 1):
                j = i + l - 1
                for k in range(i, j):
                    rootVal = max(arr[i:k+1]) * max(arr[k+1:j+1])
                    dp[i][j] = min(dp[i][j], rootVal + dp[i][k] + dp[k + 1][j])
        return dp[0][n - 1]

def mctFromLeafValues(self, A):
    res = 0
    while len(A) > 1:
        i = A.index(min(A))
        res += min(A[i - 1:i] + A[i + 1:i + 2]) * A.pop(i)
    return res

def mctFromLeafValues(self, A):
    res = 0
    stack = [float('inf')]
    for a in A:
        while stack[-1] <= a:
            mid = stack.pop()
            res += mid * min(stack[-1], a)
        stack.append(a)
    while len(stack) > 2:
        res += stack.pop() * stack[-1]
    return res