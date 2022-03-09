class FrequencyMap:
    def __init__(self) -> None:
        self.freq = dict()
        self.revserse_freq = dict()

    def check(self, f):
        if self.revserse_freq.get(f, 0):
            return 1
        return 0

    def add(self, value):
        self.freq[value] = self.freq.get(value, 0) + 1
        cur = self.freq[value]
        prev = cur - 1
        self.revserse_freq[cur] = self.revserse_freq.get(cur, 0) + 1
        if prev:
            self.revserse_freq[prev] -= 1

    def remove(self, value):
        prev = self.freq.get(value, 0)
        if prev == 0:
            return
        self.revserse_freq[prev] -= 1
        self.freq[value] -= 1
        if prev == 1:
            return
        cur = prev - 1
        self.revserse_freq[cur] += 1


def freqQuery(queries):
    fm = FrequencyMap()
    res = []
    for q, v in queries:
        if q == 1:
            fm.add(v)
        elif q == 2:
            fm.remove(v)
        else:
            res.append(fm.check(v))
    return res


freqQuery([(1, 1), (2, 2), (3, 3), (1, 1), (1, 1), (2, 1), (3, 2)])
