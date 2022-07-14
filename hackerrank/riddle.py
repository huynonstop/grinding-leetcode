from collections import defaultdict


def riddle(arr):
    # complete this function
    n = len(arr)
    res = []
    cur_min = arr[:]
    for i in range(n):
        cur_max = None
        for j in range(n - i):
            cur_min[j] = min(cur_min[j], arr[j + i])
            cur_max = cur_min[j] if not cur_max else max(
                cur_max, cur_min[j])
        res.append(cur_max)
    return res


def riddle_2(arr):
    n = len(arr)
    cur_min = arr[:]
    res = []
    for i in range(n):
        res.append(max(cur_min))
        nxt_min = []
        for j in range(n - i - 1):
            nxt_min.append(min(cur_min[j], cur_min[j + 1]))
        cur_min = nxt_min
    return res


def riddle_3(arr):
    stack = []
    arr.append(0)
    d = defaultdict(int)
    for i, j in enumerate(arr):  # making of step 2
        t = i
        while stack and stack[-1][0] >= j:
            val, li = stack.pop()
            d[j] = max(d[j], i-li+1)
            d[val] = max(d[val], i-li)
            t = li
        stack.append((j, t))
    print(d)
    del d[0]
    e = defaultdict(int)
    for i in d:  # making of step 3
        e[d[i]] = max(e[d[i]], i)
    print(e)
    l = len(arr)
    ans = [e[l-1]]  # at the end, "ans" is our resulted list of step 4
    # making of step 4; step4: we have to add the largest value in ans(i.e. last value in ans) if the current value of e[i] is less than last value in ans, else we have to just append e[i] to ans.
    for i in range(len(arr)-2, 0, -1):
        if e[i] < ans[-1]:
            ans.append(ans[-1])
        else:
            ans.append(e[i])
    print(*ans[::-1])  # step 5: print reverse ans


riddle_3([1, 4, 6, 5, 3, 4, 5])
