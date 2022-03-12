from typing import Counter


def isValid(s):
    # Write your code here
    char_freq = Counter(s)
    count_freq = Counter(char_freq.values())

    if len(count_freq) == 1:
        return 'YES'

    if len(count_freq) == 2:
        count1, count2 = count_freq.keys()
        if count_freq[count1] == 1 and (
            count1 - 1 == 0 or count1 - 1 == count2
        ):
            return 'YES'
        if count_freq[count2] == 1 and (
            count2 - 1 == 0 or count2 - 1 == count1
        ):
            return 'YES'
    return 'NO'


isValid('abcdefghhgfedecba')
