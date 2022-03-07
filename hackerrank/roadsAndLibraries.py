from collections import deque


def roadsAndLibraries(n, c_lib, c_road, cities):
    # Write your code here
    seen = set()
    adj_list = [[] for _ in range(n+1)]

    for u, v in cities:
        adj_list[u].append(v)
        adj_list[v].append(u)

    res = 0
    queue = deque()
    for i in range(1, n+1):
        if i not in seen:
            # BFS
            seen.add(i)
            queue.append(i)
            res += c_lib
            while queue:
                u = queue.popleft()
                for v in adj_list[u]:
                    if v not in seen:
                        seen.add(v)
                        queue.append(v)
                        res += min(c_lib, c_road)

    return res


# roadsAndLibraries(3, 2, 1, [[1, 2], [1, 3], [2, 3]])
roadsAndLibraries(5, 6, 1, [[1, 2], [1, 3], [1, 4]])
