from collections import Counter


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        last_index = {c: i for i, c in enumerate(s)}

        seen = set()
        stack = []
        for i, c in enumerate(s):
            if c not in seen:
                while stack and c < stack[-1] and i < last_index[stack[-1]]:
                    seen.discard(stack[-1])
                    stack.pop()
                seen.add(c)
                stack.append(c)
        return ''.join(stack)

    def removeDuplicateLetters_count(self, s: str) -> str:
        counter = Counter(s)
        temp = []
        seen = set()
        for c in s:
            if c not in seen:
                while temp and counter[temp[-1]] and c < temp[-1]:
                    seen.discard(temp[-1])
                    temp.pop()
                seen.add(c)
                temp.append(c)
            counter[c] -= 1
        return ''.join(temp)


Solution().removeDuplicateLetters(
    "bcabc")
