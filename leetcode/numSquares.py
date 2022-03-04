class Solution:
    def numSquares(self, n: int) -> int:
        # dp = [0] + [float('inf') for _ in range(n)]
        # for i in range(n+1):
        #     j = 1
        #     while j*j <= i:
        #         dp[i] = min(dp[i], dp[i - j * j] + 1)
        #         j += 1
        # return dp[-1]

        if n < 2:
            return n
        squares = []
        i = 1
        while i * i <= n:
            squares.append(i*i)
            i += 1

        res = 0
        queue = set([n])
        while queue:
            res += 1
            temp = set()
            for val in queue:
                for square in squares:
                    if val == square:
                        return res
                    if val > square:
                        temp.add(val - square)
            queue = temp
        return res


Solution().numSquares(4)
