class Solution:
    def canVisitAllRooms(self, rooms) -> bool:
        stack = [0]
        seen = set(stack)
        while stack:
            cur = stack.pop()
            for k in rooms[cur]:
                if k not in seen:
                    stack.append(k)
                    seen.add(k)
        return len(seen) == len(rooms)


def can_visit_2(rooms):
    n = len(rooms)
    seen = [True] + [False] * (n-1)
    stack = [0]
    while stack:
        cur = stack.pop()
        for k in rooms[cur]:
            if not seen[k]:
                stack.append(k)
                seen[k] = True
    return all(seen)


def can_visit(rooms):
    stack = [0]
    seen = set()
    while stack:
        cur = stack.pop()
        seen.add(cur)
        for k in rooms[cur]:
            if k not in seen:
                stack.append(k)
    return len(seen) == len(rooms)


Solution().canVisitAllRooms([[1], [2], [3], []])
