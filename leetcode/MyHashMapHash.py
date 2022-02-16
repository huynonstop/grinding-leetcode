class Node:
    def __init__(self, key, value, next=None) -> None:
        self.key = key
        self.val = value
        self.next = next


class MyHashMap:

    def __init__(self):
        self.size = 997
        self.mult = 37
        self.data = [None] * self.size
        self.dummy = Node(None, None)

    def hash(self, n):
        return n * self.mult % self.size

    def get(self, key: int) -> int:
        h = self.hash(key)
        node = self.data[h]
        while node:
            if node.key == key:
                return node.val
            node = node.next
        return -1

    def get_node_pre(self, key):
        h = self.hash(key)
        pre = self.dummy
        cur = self.data[h]
        while cur:
            if cur.key == key:
                return pre
            pre = cur
            cur = cur.next
        return None

    def put(self, key: int, value: int) -> None:
        # self.remove(key)
        # h = self.hash(key)
        # node = Node(key, value, self.data[h])
        # self.data[h] = node

        h = self.hash(key)
        head = self.data[h]

        if not head:
            self.data[h] = Node(key, value)
            return

        pre = None
        cur = head
        while cur:
            if cur.key == key:
                cur.val = value
                return
            pre = cur
            cur = cur.next
        pre.next = Node(key, value)

        # h = self.hash(key)

        # if not self.data[h]:
        #     self.data[h] = Node(key, value)
        #     return

        # pre = self.get_node_pre(key)
        # if pre:
        #     if pre == self.dummy:
        #         self.data[h].val = value
        #     else:
        #         pre.next.val = value
        # else:
        #     self.data[h] = Node(key, value)

    def remove(self, key: int) -> None:
        h = self.hash(key)
        pre = None
        cur = self.data[h]
        while cur:
            if cur.key == key:
                if not pre:
                    self.data[h] = cur.next
                else:
                    pre.next = cur.next
                return
            pre = cur
            cur = cur.next

        # h = self.hash(key)
        # pre = self.get_node_pre(key)
        # if pre:
        #     if pre == self.dummy:
        #         self.data[h] = self.data[h].next
        #     else:
        #         pre.next = pre.next.next
