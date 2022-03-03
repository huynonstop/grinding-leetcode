class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        self.stack = []
        node = root
        while node:
            self.stack.append(node)
            node = node.left

    def next(self) -> int:
        node = self.stack.pop()
        right = node.right
        while right:
            self.stack.append(right)
            right = right.left
        return node.val

    def hasNext(self) -> bool:
        return bool(self.stack)


class BSTIteratorGenerator:
    def __init__(self, root):
        self.g = self.iterate(root)
        self.try_next()

    def hasNext(self):
        return self.cur is not None

    def next(self):
        val = self.cur
        self.advance()
        return val

    def try_next(self):
        try:
            self.cur = next(self.g)
        except StopIteration:
            self.cur = None

    def iterate(self, node):
        if node is None:
            return
        yield from self.iterate(node.left)
        yield node.val
        yield from self.iterate(node.right)
