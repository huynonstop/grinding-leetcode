class MyQueue:
    # https://leetcode.com/problems/implement-queue-using-stacks/discuss/64284/Do-you-know-when-we-should-use-two-stacks-to-implement-a-queue
    def __init__(self):
        self.input = []
        self.output = []

    def push(self, x: int) -> None:
        self.input.append(x)

    def pop(self) -> int:
        if not self.output:
            while self.input:
                self.output.append(self.input[-1])
                self.input.pop()
        return self.output.pop()

    def peek(self) -> int:
        if not self.output:
            while self.input:
                self.output.append(self.input[-1])
                self.input.pop()
        return self.output([-1])

    def empty(self) -> bool:
        return not self.input and not self.output


q = MyQueue()
q.push(1)
q.pop()
