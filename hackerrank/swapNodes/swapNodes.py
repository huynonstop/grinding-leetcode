class TreeNode:
    def __init__(self, val, left, right) -> None:
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self) -> str:
        return f'({self.val},{self.left}-{self.right})'

    def __iter__(self):
        yield self.val
        yield self.left
        yield self.right


def inorder_iter(head):
    res = []
    stack = []
    cur = head
    while cur or stack:
        while cur != None:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        res.append(cur.val)
        cur = cur.right
    return res


def inorder_recursion(res, head):
    if head:
        inorder_recursion(res, head.left)
        res.append(res.val)
        inorder_recursion(res, head.right)


def swapNodes(indexes, queries):
    # Write your code here
    i = 0
    n = len(indexes)
    head = TreeNode(1, None, None)
    queue = [head]
    depth = []
    while queue:
        temp = []
        depth.append(queue)
        for cur in queue:
            val_left, val_right = indexes[i]
            if val_left != -1:
                cur.left = TreeNode(val_left, None, None)
                temp.append(cur.left)
            if val_right != -1:
                cur.right = TreeNode(val_right, None, None)
                temp.append(cur.right)
            i += 1
        queue = temp
    res = []
    for k in queries:
        j = 1
        while j * k - 1 < len(depth):
            for node in depth[j * k - 1]:
                _, left, right = node
                node.left, node.right = right, left
            j += 1
        res.append(inorder_iter(head))
    return res


# swapNodes([[2, 3], [-1, 4], [-1, 5], [-1, -1], [-1, -1]], [2])

swapNodes([
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1],
], [2, 4])
