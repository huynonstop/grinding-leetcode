import heapq


class MinHeap:
    def __init__(self): self.h = []
    def heappush(self, x): heapq.heappush(self.h, x)
    def heappop(self): return heapq.heappop(self.h)
    def peek(self): return self.h[0]
    def __len__(self): return len(self.h)


class MaxHeap:
    def __init__(self): self.h = []
    def heappush(self, x): heapq.heappush(self.h, -x)
    def heappop(self): return -heapq.heappop(self.h)
    def peek(self): return -self.h[0]
    def __len__(self): return len(self.h)


class MedianHeap:
    def __init__(self) -> None:
        self.max_heap = MaxHeap()
        self.min_heap = MinHeap()

    def get_len(self):
        return len(self.min_heap), len(self.max_heap)

    def get_median(self):
        mn_len, mx_len = self.get_len()
        if mn_len == mx_len == 0:
            return None
        elif mn_len >= mx_len:
            return self.min_heap.peek()
        else:
            return self.max_heap.peek()

    def add(self, value):
        median = self.get_median()
        if median == None:
            self.min_heap.heappush(value)
        elif value >= median:
            self.min_heap.heappush(value)
        else:
            self.max_heap.heappush(value)

    def balance(self):
        mn_len, mx_len = self.get_len()
        if abs(mn_len - mx_len) >= 2:
            if mn_len > mx_len:
                self.max_heap.heappush(self.min_heap.heappop())
            else:
                self.min_heap.heappush(self.max_heap.heappop())
