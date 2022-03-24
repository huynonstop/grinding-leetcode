from collections import Counter, defaultdict
import heapq


class FreqStack:

    def __init__(self):
        self.counter = Counter()
        self.f_map = defaultdict(list)
        self.max_f = 0

    def push(self, val: int) -> None:
        self.counter[val] += 1
        f = self.counter[val]

        self.max_f = max(self.max_f, f)
        self.f_map[f].append(val)

    def pop(self) -> int:
        x = self.f_map[self.max_f].pop()
        if not self.f_map[self.max_f]:
            self.max_f -= 1
        self.counter[x] -= 1
        return x


class PQMax:
    def __init__(self, p, i, value) -> None:
        self.p = p
        self.i = i
        self.value = value

    def __iter__(self):
        yield self.p
        yield self.i
        yield self.value

    def __lt__(self, other):
        if self.p == other.p:
            return self.i > other.i
        return self.p > other.p

    def __repr__(self) -> str:
        return f'({self.p},{self.value})'


class FreqStackPQ:
    def __init__(self):
        self.counter = Counter()
        self.pq = []
        self.i = 0

    def push(self, val: int) -> None:
        self.counter[val] += 1
        f = self.counter[val]
        heapq.heappush(self.pq, PQMax(f, self.i, val))
        self.i += 1

    def pop(self):
        p, i, val = heapq.heappop(self.pq)
        self.counter[val] -= 1
        return val
