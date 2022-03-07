def journeyToMoon(n, astronaut):
    # Write your code here
    adj_list = [[] for _ in range(n)]
    for u, v in astronaut:
        adj_list[u].append(v)
        adj_list[v].append(u)

    seen = set()

    def dfs(start):
        stack = [start]
        seen.add(start)
        total = 1
        while stack:
            i = stack.pop()
            for j in adj_list[i]:
                if j not in seen:
                    total += 1
                    seen.add(j)
                    stack.append(j)
        return total

    res = 0
    total_size = 0
    for i in range(n):
        if i not in seen:
            size = dfs(i)
            # res += size * (n - size)

            res += total_size * size
            total_size += size

    # return res // 2
    return res


journeyToMoon(5, [[0, 1], [2, 3], [0, 4]])
