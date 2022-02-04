class Node:
    def __init__(self) -> None:
        self.children = dict()
        self.item = ''

    def insert(self, s):
        node = self
        for c in s:
            if c not in node.children:
                node.children[c] = Node()
            node = node.children[c]
        node.item += s

    def search(self, s):

        def dfs(node, s, c):
            if c == len(s):
                return node.item != ''

            if s[c] != '.':
                return s[c] in node.children and dfs(
                    node.children[s[c]],
                    s, c + 1)
            else:
                for k in node.children:
                    if dfs(node.children[k], s, c + 1):
                        return True
            return False

        return dfs(self, s, 0)


class WordDictionary:

    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        self.root.insert(word)

    def search(self, word: str) -> bool:
        return self.root.search(word)
        # Your WordDictionary object will be instantiated and called as such:
        # obj = WordDictionary()
        # obj.addWord(word)
        # param_2 = obj.search(word)


wordDictionary = WordDictionary()
wordDictionary.addWord("bad")
wordDictionary.addWord("dad")
wordDictionary.addWord("mad")
assert wordDictionary.search("pad") == False
assert wordDictionary.search("bad") == True
assert wordDictionary.search(".ad") == True
assert wordDictionary.search("b..") == True
