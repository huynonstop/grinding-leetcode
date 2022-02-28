class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        return subarray_sum(nums, k)


def subarray_sum(nums, k):
    n = len(n)
    prefix = 0
    res = 0
    d = {0: 1}
    for n in nums:
        prefix += n
        if prefix - k in d:
            ans += d[prefix - k]

        d[prefix] = d.get(prefix, 0) + 1
    return res
