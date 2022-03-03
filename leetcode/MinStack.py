class MinStack:

    def __init__(self):
        self.s1 = []
        self.s2 = []

    def push(self, val: int) -> None:
        self.s1.push(val)
        if self.s2 or val <= self.s2[-1]:
            self.s2.push(val)

    def pop(self) -> None:
        if self.top() == self.getMin():
            self.s2.pop()
        self.s1.pop()

    def top(self) -> int:
        return self.s1[-1]

    def getMin(self) -> int:
        return self.s2[-1]
        # Your MinStack object will be instantiated and called as such:
        # obj = MinStack()
        # obj.push(val)
        # obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.getMin()


class MinStack1Stack:

    def __init__(self):
        self.s1 = []
        self.min = float('inf')

    def push(self, val: int) -> None:
        if val <= self.getMin():
            self.s1.append(self.getMin())
            self.min = val
        self.s1.append(val)

    def pop(self) -> None:
        popped = self.top()
        self.s1.pop()
        if popped == self.getMin():
            self.min = self.top()
            self.s1.pop()

    def top(self) -> int:
        return self.s1[-1]

    def getMin(self) -> int:
        return self.min
        # Your MinStack object will be instantiated and called as such:
        # obj = MinStack()
        # obj.push(val)
        # obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.getMin()
