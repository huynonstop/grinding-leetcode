class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return single_number_set(nums)

# Brute force find each num O(n^2)

# Set O(n)


def single_number_set(nums):
    s = set()

    for n in nums:
        if n not in s:
            s.add(n)
        else:
            s.remove(n)
    return s.pop()

# A XOR A = 0 and the XOR operator is commutative
# 0 XOR A = A
# 0 ^ res ^ a ^ b ^ a ^ b = res


def single_number_xor(nums):
    res = 0
    for n in nums:
        res = res ^ n
    return res
