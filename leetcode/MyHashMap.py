class MyHashMap:

    def __init__(self):
        self.size = 10 ** 6 + 1
        self.array = [-1] * self.size

    def hash(self, n):
        return n

    def put(self, key: int, value: int) -> None:
        self.array[self.hash(key)] = value

    def get(self, key: int) -> int:
        return self.array[self.hash(key)]

    def remove(self, key: int) -> None:
        self.array[self.hash(key)] = -1
        # Your MyHashMap object will be instantiated and called as such:
        # obj = MyHashMap()
        # obj.put(key,value)
        # param_2 = obj.get(key)
        # obj.remove(key)
