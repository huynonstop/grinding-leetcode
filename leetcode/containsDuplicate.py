class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return contains_dup_set(nums)

# Search O(N^2)
# Sort O(NlogN)


def contains_dup_set(nums):
    s = set()
    for n in nums:
        if n in s:
            return True
        s.add(n)
    return False


def contains_dup_short_set(nums):
    s = set(nums)
    return len(nums) > len(s)
