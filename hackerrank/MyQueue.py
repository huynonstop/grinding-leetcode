class MyQueue(object):
    def __init__(self):
        self.data = []
        self.head = 0

    def peek(self):
        return self.data[self.head]

    def pop(self):
        self.head += 1
        return self.data[self.head - 1]

    def put(self, value):
        self.data.push(value)


queue = MyQueue()
