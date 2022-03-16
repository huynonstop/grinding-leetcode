from bisect import bisect_left
import heapq


class MaxNode:
    def __init__(self, value, index) -> None:
        self.value = value
        self.index = index

    def __iter__(self):
        yield self.value
        yield self.index

    def __lt__(self, other):
        return self.value > other.value

    def __repr__(self) -> str:
        return f'({self.value},{self.index})'


def climbingLeaderboard_misunderstand(ranked, player):
    # Write your code here
    n = len(player)
    heap = []
    for score in ranked:
        heapq.heappush(heap, MaxNode(score, None))
    for i, score in enumerate(player):
        heapq.heappush(heap, MaxNode(score, i))
    res = [None] * n
    i = 0
    pre = None
    while heap:
        score, index = heapq.heappop(heap)
        if score != pre:
            i += 1
            pre = score
        if index != None:
            res[index] = i
    return res


def climbingLeaderboard(ranked, player):
    ranking = []
    pre = None
    rank = 0
    for score in ranked:
        if pre != score:
            rank += 1
            pre = score
        ranking.append(rank)
    res = []
    for score in player:
        insert_right = bisect_right(ranked, score)
        if score >= ranked[insert_right]:
            res.append(ranking[insert_right])
        else:
            res.append(ranking[insert_right] + 1)
    return res


def bisect_right(arr, k):  # decrease
    l = 0
    r = len(arr)-1
    while l < r:
        m = (l+r) >> 1
        if arr[m] > k:
            l = m + 1
        else:
            r = m
    return l


def climbingLeaderboardSet(ranked, player):
    counts = sorted(set(ranked))
    n = len(counts)
    res = []
    for a in player:
        i = bisect_left(counts, a)
        if i < n and counts[i] == a:
            res.append(n - i)
        else:
            res.append(n+1-i)
    return res


def bisect_left(arr, k):  # increase
    l = 0
    r = len(arr)
    while l < r:
        m = (l + r) >> 1
        if arr[m] < k:
            l = m + 1
        else:
            r = m
    return l


climbingLeaderboardSet(
    [100, 100, 50, 40, 40, 20, 10],
    [5, 25, 50, 120])
