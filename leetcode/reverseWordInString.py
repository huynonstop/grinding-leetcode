class Solution:
    def reverseWords(self, s: str) -> str:
        l_w = 0
        i = 0
        res = ''
        while i < len(s):
            if s[i] == ' ':
                res += s[i - l_w: i][::-1] + ' '
                l_w = 0
            else:
                l_w += 1
            i += 1
        return res + s[i - l_w: i][::-1]


def reverse_word_1(s):
    return ' '.join(s.split()[::-1])[::-1]


def reverse_word_2(s):
    return ' '.join([x[::-1] for x in s.split()])


reverse_word_1("Let's take LeetCode contest")
