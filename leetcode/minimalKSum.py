class Solution:
    def minimalKSum(self, nums: List[int], k: int) -> int:
        ans += k * (k + 1) // 2
        l = k + 1
        for i in sorted(set(nums)):
            if i < k + 1:
                ans += (l - i)
                l += 1
        return ans

# [1,3,4,5,5,5]; k = 2
# [2,6] = [1,2,3,4,5,6] - [1,3,4,5]

# [5,5,6], k = 3
# [1,2,3]
