from collections import deque


class Solution:
    def canReach(self, arr, start: int) -> bool:
        n = len(arr)
        q = deque([start])
        seen = set([start])
        while q:
            cur = q.popleft()
            if arr[cur] == 0:
                return True
            for i in [cur+arr[cur], cur - arr[cur]]:
                if i not in seen and 0 <= i < n:
                    seen.add(i)
                    q.append(i)
        return False

    def canReachDFS(arr, start):
        n = len(arr)

        def dfs(i):
            if 0 <= i < n and arr[i] >= 0:
                arr[i] = -arr[i]
                return arr[i] == 0 or dfs(
                    i + arr[i]) or dfs(
                    i - arr[i])
            return False

        return dfs(start)


Solution().canReach([4, 2, 3, 0, 3, 1, 2],
                    5)
