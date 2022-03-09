class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return self.name + ' ' + self.score

    def comparator(a, b):
        if a.score != b.score:
            return b.score - a.score
        elif a.name == b.name:
            return 0
        elif a.name < b.name:
            return -1
        else:
            return 1
