class Solution:
    def bitwiseComplement(self, n: int) -> int:
        bit_len = 1
        while 2 ** bit_len - 1 < n:
            bit_len += 1
        return 2 ** bit_len - 1 - n


assert Solution().bitwiseComplement(5) == 2
assert Solution().bitwiseComplement(7) == 0
assert Solution().bitwiseComplement(10) == 5
assert Solution().bitwiseComplement(0) == 1
