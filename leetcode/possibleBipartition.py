class Solution:
    def possibleBipartition(
            self, n: int, dislikes: List[List[int]]) -> bool:
        NOT_COLORED, BLUE, GREEN = 0, 1, -1
        if n == 1 or not dislikes:
            return True
        dislike_graph = [set() for _ in range(n)]
        colors = [0] * n

        for i, j in dislikes:
            dislike_graph[i-1].add(j-1)
            dislike_graph[j-1].add(i-1)

        # def helper(i, color):
        #     colors[i] = color
        #     for j in dislike_graph[i]:
        #         if colors[j] == color:
        #             return False
        #         if colors[j] == NOT_COLORED and (
        #                 not helper(j, -color)):
        #             return False
        #     return True

        # for i in range(n):
        #     if colors[i] == NOT_COLORED and (not helper(i, BLUE)):
        #         return False

        queue = set()
        for i in range(n):
            if colors[i] == NOT_COLORED:
                queue.append(i)
                colors[i] = 1
            while queue:
                temp = set()
                for j in queue:
                    for k in dislike_graph[j]:
                        if colors[k] == colors[j]:
                            return False
                        if colors[k] == 0:
                            colors[k] = -colors[j]
                            temp.add(k)
                queue = temp
        return True
