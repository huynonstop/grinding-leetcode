def substrCount(n, s):
    count = 0
    arr = []
    for i in range(n):
        left = right = i
        while right < n and s[i] == s[right]:
            arr.append(s[left:right + 1])
            right += 1
            count += 1
        if 0 < i and right < n:
            left -= 1
            value = s[right] if right - left + 1 == 3 else s[i]
            while right < n and left >= 0 and s[right] == s[left] == value:
                arr.append(s[left:right + 1])
                right += 1
                left -= 1
                count += 1
    return count


substrCount(7, 'abcbaba')
